export default new ConfirmationPage();

class ConfirmationPage {
    getCompleteHeader() {
        return
        cy.get('[data-test="completeheader"]');
    }
}