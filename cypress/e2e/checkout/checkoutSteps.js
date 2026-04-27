
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("que acesso a página de login", () => {
  LoginPage.visit();
});

When("faço login com usuário válido", () => {
  LoginPage.login("standard_user", "secret_sauce");
});

When("tento login com senha inválida", () => {
  LoginPage.login("standard_user", "senha_errada");
});

Then("devo visualizar mensagem de erro no login", () => {
  LoginPage.validateErrorMessage("Username and password do not match");
});

When("adiciono um produto ao carrinho", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get(".shopping_cart_badge").should("be.visible").and("contain", "1");
});

When("inicio o checkout", () => {
  cy.get(".shopping_cart_link").click();
  cy.get('[data-test="checkout"]').click();
});

When("preencho os dados obrigatórios do comprador", () => {
  cy.get('[data-test="firstName"]').type("Luciana");
  cy.get('[data-test="lastName"]').type("QA");
  cy.get('[data-test="postalCode"]').type("83260-000");
  cy.get('[data-test="continue"]').click();
});

When("finalizo a compra", () => {
  cy.get('[data-test="finish"]').click();
});

Then("devo visualizar a mensagem de pedido concluído", () => {
  cy.get('[data-test="complete-header"]')
    .should("be.visible")
    .and("contain", "Thank you for your order");

  cy.screenshot("checkout-completo-sucesso");
});

When("tento continuar sem preencher os dados obrigatórios", () => {
  cy.get('[data-test="continue"]').click();
});

Then("devo visualizar mensagem de erro no checkout", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain", "First Name is required");

  cy.screenshot("checkout-campos-obrigatorios-em-branco");
});


