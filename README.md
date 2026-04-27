///Este projeto contém testes automatizados de API usando Cypress e JavaScript.

Foram validados cenários positivos e negativos para os métodos HTTP:
GET, POST, PUT e DELETE.

As validações incluem:
- Status code
- Headers
- Corpo da resposta
- Estrutura dos dados retornados
- Cenário negativo para recurso inexistente
- Cenário negativo com payload incompleto

** Testes E2E (Cucumber)

Foram implementados testes end-to-end utilizando Cucumber com Cypress.

### Cenários cobertos:
- Login com sucesso
- Login com erro
- Checkout completo com sucesso
- Checkout com campos obrigatórios em branco

### Ferramentas:
- Cypress
- Cucumber (BDD)
- JavaScript

### Estrutura do projeto

cypress/
 ├── e2e/
 │ ├── api/
 │ └── checkout/
 ├── pages/
 ├── fixtures/
 ├── support/

.github/workflows/
 └── cypress-tests.yml

 ## Como Instalar

- npm install

 ## Como Executar

- npx cypress open ou
- npx cypress run

## CI/CD

Pipeline configurada com GitHub Actions para executar testes automaticamente a cada commit.
