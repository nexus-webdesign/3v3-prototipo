# 3v3 Tecnologia — site institucional

Site institucional estático da 3v3 Tecnologia, desenvolvido com React e Vite.

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

## Gerar e testar a versão de produção

```bash
npm run build
npm run preview
```

O build de produção é gerado na pasta `dist`. Os arquivos estáticos permanecem
na raiz dessa pasta; a etapa final também cria uma cópia em `dist/client` e um
adaptador mínimo em `dist/server` para compatibilidade com o ChatGPT Sites.

## Publicação

O conteúdo de `dist` pode ser publicado diretamente em hospedagens estáticas como
Netlify e Vercel. O projeto não utiliza banco de dados, autenticação, CMS,
funções serverless ou backend.
