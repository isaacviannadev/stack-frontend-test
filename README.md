# Stack Frontend Test

Este é um projeto de teste de frontend utilizando diversas tecnologias modernas como React, Next.js, Zustand, React Query, Material UI, Cypress e Jest. O objetivo do projeto é criar uma página home com uma listagem de produtos e um campo de busca, consumindo uma API de e-commerce gratuita.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Aviso Importante](#aviso-importante)
- [Rodando o Projeto](#rodando-o-projeto)
- [Versão Deployada](#versão-deployada)
- [Rodando os Testes](#rodando-os-testes)
  - [Testes Unitários](#testes-unitários)
  - [Testes End-to-End](#testes-end-to-end)
- [Contribuição](#contribuição)


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

## Aviso Importante

&#x1F590; **Atenção:**

A API utilizada neste projeto é uma API de e-commerce gratuita e aberta ao público, disponível em [Platzi Fake API](https://fakeapi.platzi.com/). Devido ao seu caráter aberto, os dados dos produtos podem ser frequentemente alterados ou deletados por outros usuários.

Durante o desenvolvimento, foi observado que os produtos são frequentemente modificados ou removidos, o que pode impactar na exibição dos dados e no funcionamento do projeto. Recomendo que, para uma experiência mais estável, você considere utilizar uma versão local da API ou criar sua própria instância.

Pedimos desculpas por qualquer inconveniente causado por essas alterações frequentes e agradecemos pela compreensão.


## Versão Deployed do Projeto
Você pode acessar a versão publicada do projeto (deployed) através do link: [https://stack-frontend-test.vercel.app/](https://stack-frontend-test.vercel.app/) 

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

## Testes End-to-End
Para rodar os testes end-to-end com o Cypress:

Abra o Cypress:

```sh
npm run cypress:open
# ou
yarn cypress:open
``` 

Execute os testes através da interface do Cypress.

Feito com ❤️ por Isaac Vianna