Beer Delivery App - Frontend
============================

Este repositório contém o código do frontend da aplicação de entrega de cerveja. O objetivo desta aplicação é permitir que os usuários pesquisem e solicitem entrega de cervejas de diversos estabelecimentos.

Instalação e execução
---------------------

Para instalar as dependências e executar o projeto, siga os seguintes passos:

1.  Clone este repositório para a sua máquina local:

`git clone https://github.com/StarAmbients/beer-delivery-app.git`

1.  Acesse o diretório do projeto:

`cd beer-delivery-app/frontend`

1.  Instale as dependências:

`npm install`

1.  Execute o projeto:

`npm start`

O projeto será iniciado em modo de desenvolvimento e abrirá automaticamente em um navegador. Qualquer alteração nos arquivos do projeto resultará em uma atualização automática da página no navegador.

Dependências
------------

Este projeto foi criado com [create-react-app](https://github.com/facebook/create-react-app) e utiliza as seguintes dependências:

-   [React](https://reactjs.org/)
-   [Axios](https://github.com/axios/axios)
-   [React Router](https://reactrouter.com/)

Estrutura do projeto
--------------------

A estrutura de arquivos do projeto é a seguinte:

`frontend
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    ├── components
    ├── services
    ├── utils
    ├── App.js
    ├── index.js
    ├── serviceWorker.js
    └── setupTests.js`

-   A pasta `public` contém arquivos estáticos, como o arquivo HTML principal da aplicação e o ícone da aplicação.
-   A pasta `src` contém o código fonte da aplicação.
    -   A pasta `assets` contém arquivos de mídia utilizados pela aplicação, como imagens.
    -   A pasta `components` contém os componentes React da aplicação.
    -   A pasta `services` contém código responsável por fazer requisições HTTP para a API da aplicação.

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
We are following diligently Figma instructions for styling the output
https://www.figma.com/file/cNKu41RhnPIgNqrbMTzmUI/Project%3A-Delivery-App?node-id=0%3A1&t=yPP4zekNmPobc39S-3

Entrega de Cerveja - Backend
============================

Este é o backend da aplicação de entrega de cerveja. Ele foi construído com as seguintes tecnologias:

-   [Node.js](https://nodejs.org)
-   [Express](https://expressjs.com)
-   [MongoDB](https://www.mongodb.com)
-   [Mongoose](https://mongoosejs.com)

Como executar o projeto
-----------------------

1.  Clone este repositório com `git clone https://github.com/StarAmbients/beer-delivery-app.git`
2.  Entre na pasta do projeto com `cd beer-delivery-app/back-end`
3.  Instale as dependências do projeto com o comando `npm install`
4.  Crie um arquivo `.env` com as variáveis de ambiente necessárias (veja o arquivo `.env.example` como referência)
5.  Inicie o servidor com o comando `npm start`
6.  Acesse a API em `http://localhost:3000`

Como testar o projeto
---------------------

1.  Crie um arquivo `.env.test` com as variáveis de ambiente necessárias (veja o arquivo `.env.test.example` como referência)
2.  Execute os testes com o comando `npm test`

Rotas da API
------------

A tabela a seguir descreve as rotas da API e os métodos HTTP suportados:

| Rota | Métodos HTTP | Descrição |
| --- | --- | --- |
| `/beers` | GET | Lista todas as cervejas |
| `/beers` | POST | Cria uma nova cerveja |
| `/beers/:id` | GET | Retorna uma cerveja específica |
| `/beers/:id` | PUT | Atualiza uma cerveja específica |
| `/beers/:id` | DELETE | Exclui uma cerveja específica |
| `/orders` | GET | Lista todos os pedidos |
| `/orders` | POST | Cria um novo pedido |
| `/orders/:id` | GET | Retorna um pedido específico |
| `/orders/:id` | PUT | Atualiza um pedido específico |
| `/orders/:id` | DELETE | Exclui um pedido específico |
| `/delivery-status/:id` | GET | Retorna o status de entrega de um pedido específico |

