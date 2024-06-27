# Stack Frontend Test

Este é um projeto de teste de frontend utilizando diversas tecnologias modernas como React, Next.js, Zustand, React Query, Material UI, Cypress e Jest. O objetivo do projeto é criar uma página home com uma listagem de produtos e um campo de busca, consumindo uma API de e-commerce gratuita.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **Zustand**: Biblioteca para gerenciamento de estado.
- **React Query**: Biblioteca para gerenciamento de estado de requisições HTTP.
- **Material UI**: Biblioteca de componentes React para estilização.
- **Cypress**: Framework para testes end-to-end.
- **Jest**: Framework para testes unitários.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.

## Estrutura do Projeto
```
/
├── components/
│ ├── CartDrawer/
│ ├── ErrorComponent/
│ ├── FilterBar/
│ ├── LoadingComponent/
│ ├── ProductCard/
│ ├── ProductList/
│ └── ResponsiveFilterBar/
├── hooks/
│ └── useProducts.ts
├── pages/
│ ├── api/
│ ├── _app.tsx
│ └── index.tsx
├── public/
├── store/
│ └── cartStore.ts
├── styles/
│ └── globals.css
├── utils/
│ ├── filterUtils.ts
│ ├── normalizeImages.ts
│ └── priceFormatter.ts
├── .eslintrc.json
├── jest.config.js
├── jest.setup.ts
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/isaacviannadev/stack-frontend-test.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd stack-frontend-test
    ```

3. Instale as dependências:
    ```sh
    npm install
    # ou
    yarn install
    ```

## Rodando o Projeto

Para rodar o projeto em modo de desenvolvimento:

```sh
npm run dev
# ou
yarn dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

Rodando os Testes
Testes Unitários
Para rodar os testes unitários com o Jest:

```sh
npm run test
# ou
yarn test
```

Feito com ♥️ por Isaac Vianna