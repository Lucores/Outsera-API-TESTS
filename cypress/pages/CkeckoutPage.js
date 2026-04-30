export default new CheckoutPage();

class CheckoutPage {
    fillFirstName(firstName) {
      cy.get('[data-test="firstName"]').clear().type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('[data-test="lastName"]').clear().type(lastName);
    }
  
    fillPostalCode(postalCode) {
      cy.get('[data-test="postalCode"]').clear().type(postalCode);
    }
  
    fillCustomerData(customer) {
      this.fillFirstName(customer.firstName);
      this.fillLastName(customer.lastName);
      this.fillPostalCode(customer.postalCode);
    }
  
    continueCheckout() {
      cy.get('[data-test="continue"]').click();
    }
  
    finishCheckout() {
      cy.get('[data-test="finish"]').click();
    }
  
    getErrorMessage() {
      return cy.get('[data-test="error"]');
    }
  }
  