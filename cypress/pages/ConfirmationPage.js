class ConfirmationPage {
    getCompleteHeader() {
      return cy.get('[data-test="complete-header"]');
    }
  }
  
  export default new ConfirmationPage();