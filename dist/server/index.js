const indexRequest = (request) => {
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
