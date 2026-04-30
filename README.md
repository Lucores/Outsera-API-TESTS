# Outsera API Tests

Projeto de automaçao de testes desenvolvido para avaliação tecnica.
Comtempla testes automatizados referentes a API e testes End-to-End em uma palicação we de e-commerce.
Utilizei Cypress, JavaScript, Cucumber e BDD, usando PageObjects em sua estrutura, fixtures para manter
os dados, pipleline CI/CD, utilizando GitHub Actions e inclui as pastas de screenshots, videos para gerar
evidências das execuções.

# Tecnologias utilizadas

- JavaScript
- Node.js
- Cypress
- Cucumber/BDD
- GitHub Actions
- JsonPlaceholder API
- Sauce Demo

# Arquitetura

cypress/ 
e2e/ 
api/
=> posts.cy.js
checkout/
=> chekout.feature 
=> ckeckoutSteps.js
fixtures/
=> checkoutData.json
=> products.json
=> users.json
pages/
=> CartPages.js
=> CheckoutPage.js
=> ConfirmationPage.js
=> LoginPage.js
=> ProductsPage.js
support/

.github/
=> workflows
=> cypress-tests.yml


# E2E

# Page Objects
Os testes do fluxo E2E foram efetuados utilizando a estrutura Page Objects, onde as interações com os elementos são separadas da logica dos cenarios.

Page Objects criados:
- Login;
- Produtos;
- Carrinho de compras;
- Checkout;
- Confirmação da compra.

# Single Response 
Os page objects centralizam as ações e elementos da paginas. 
Nos Steps Definitions estão as validações e assertivas para não serem misturadas a ação e assrerção dentro da mesma classe.


# Fixtures
Nos fixtures estão os dados de testes criados em arquivos JSON para evitar hardcoded data nos steps.

# Cenarios API

A API utilizada foi JSONPlaceholder.

Efetuei a cobertura de:

- GET lista de posts
- GET post especifico
- POST criação de post
- PUT atualização de post
- DELETE Post
- GET negativo para recurso inexistente
- Validação simples de performance por tempo de resposta.

# Cenarios E2E

Efetuei cobertura de:

- Compra Completa com sucesso.
- Login com senha invalida.
- Checkout com campos obrigatorios em branco.

# Como Instalar
- No terminal efetuar:
- npm install

# Como Executar os testes
- No terminal efetuar:
- npm run cy:open => para abrir o cypress em modo interativo.

# Executar todos os testes
- No terminal executar:
- npm run test

# Executar apenas testes de API
- No terminal executar:
- npm run test:api

# Executar apenas E2E
- No terminal executar:
- npm run test:e2e

# Executar em Chrome
 - No terminal executar:
 - npm run test:chrome

 # Ambientes
  BASE_URL= https://www.saucedemo.com
  API_URL= https://jsonplaceholder.typicode.com

 # Observação: valores default estão configurados no cypress.config.js

 # CI/CD
 A pipeline está configurada com GitHub Actions no arquivo:
 .github/workflows/cypress-tests.yml
  Ao efetuar push ou pull request para a main ou master o pipeline deve executar:
- Instalar as dependências
- Testes de API
- Testes E2E
- Upload de screenshots e videos como artefatos.

# Evidências
As execuções devem gerar evidências automaticamente:
- cypress/screenshots
- cypress/video

# Relatorio de Testes
Está disponivel no arquivo:
- RELATORIO_TESTS.md

# Performance

- Inclui uma validação simples de performance na API, que verifica o tempo de resposta aceitavel.














