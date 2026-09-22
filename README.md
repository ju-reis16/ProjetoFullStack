# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# Cosmos Observatory

Perfil do observatório feito com React, Vite, Express e PostgreSQL.

## Executar

Requer Node.js 22.5 ou superior e PostgreSQL instalado e iniciado.

1. Instale as dependências: `npm install`
2. Copie `.env.example` para `.env` e preencha `DB_PASSWORD` com a senha do PostgreSQL.
3. Confirme que o banco do pgAdmin se chama `astrologia` e ajuste `PROFILE_TABLE`/`PROFILE_ID` para a tabela e registro corretos.
4. Em um terminal, inicie a API: `npm run server`
5. Em outro terminal, inicie o frontend: `npm run dev`
6. Abra `http://localhost:5173/`

O backend conecta ao banco PostgreSQL `astrologia` e não cria nem remove tabelas. A API oferece `GET /api/profile` para carregar o perfil e `PUT /api/profile` para salvar as alterações. Durante o desenvolvimento, o Vite encaminha `/api` para `http://localhost:3001`.

## Produção local

Execute `npm run build` e depois `npm run server`. O Express servirá os arquivos gerados em `dist` junto com a API.
