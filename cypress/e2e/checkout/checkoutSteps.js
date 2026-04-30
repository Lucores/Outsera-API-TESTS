import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ConfirmationPage from "../../pages/ConfirmationPage";

let users;
let checkoutData;
let products;

before(() => {
  cy.fixture("users").then((data) => {
    users = data;
  });

  cy.fixture("checkoutData").then((data) => {
    checkoutData = data;
  });

  cy.fixture("products").then((data) => {
    products = data;
  });
});

Given("que acesso a página de login", () => {
  LoginPage.visit();
});

When("faço login com usuário válido", () => {
  LoginPage.login(users.validUser.username, users.validUser.password);
});

When("tento login com senha inválida", () => {
  LoginPage.login(users.invalidUser.username, users.invalidUser.password);
});

Then("devo visualizar mensagem de erro no login", () => {
  LoginPage.getErrorMessage()
    .should("be.visible")
    .and("contain", "Username and password do not match");
});

When("adiciono um produto ao carrinho", () => {
  ProductsPage.getTitle().should("contain", "Products");
  ProductsPage.addProductToCart(products.backpack);
  ProductsPage.getCartBadge().should("be.visible").and("contain", "1");
});

When("inicio o checkout", () => {
  ProductsPage.openCart();
  CartPage.getCartItem().should("be.visible");
  CartPage.clickCheckout();
});

When("preencho os dados obrigatórios do comprador", () => {
  CheckoutPage.fillCustomerData(checkoutData.validCustomer);
  CheckoutPage.continueCheckout();
});

When("finalizo a compra", () => {
  CheckoutPage.finishCheckout();
});

Then("devo visualizar a mensagem de pedido concluído", () => {
  cy.get('[data-test="complete-header"]')
    .should("be.visible")
    .and("contain", "Thank you for your order");

  cy.screenshot("checkout-completo-sucesso");
})

When("tento continuar sem preencher os dados obrigatórios", () => {
  CheckoutPage.continueCheckout();
});

Then("devo visualizar mensagem de erro no checkout", () => {
  CheckoutPage.getErrorMessage()
    .should("be.visible")
    .and("contain", "First Name is required");

  cy.screenshot("checkout-campos-obrigatorios-em-branco");
});

