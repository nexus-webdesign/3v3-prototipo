import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const server = path.join(dist, "server");
const hostingDir = path.join(dist, ".openai");

await mkdir(client, { recursive: true });

for (const entry of await readdir(dist, { withFileTypes: true })) {
  if (["client", "server", ".openai"].includes(entry.name)) continue;
  await cp(path.join(dist, entry.name), path.join(client, entry.name), {
    recursive: true,
    force: true,
  });
}

await mkdir(server, { recursive: true });
await mkdir(hostingDir, { recursive: true });

const worker = `const indexRequest = (request) => {
  const url = new URL(request.url);
  url.pathname = "/index.html";
  return new Request(url, request);
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isNavigation =
      request.method === "GET" &&
      (url.pathname === "/" || !url.pathname.split("/").pop()?.includes("."));

    if (isNavigation) {
      return env.ASSETS.fetch(indexRequest(request));
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status === 404 && request.method === "GET") {
      return env.ASSETS.fetch(indexRequest(request));
    }
    return response;
  },
};
`;

await writeFile(path.join(server, "index.js"), worker, "utf8");

const hosting = await readFile(
  path.join(root, ".openai", "hosting.json"),
  "utf8",
);
await writeFile(path.join(hostingDir, "hosting.json"), hosting, "utf8");
