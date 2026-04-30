export default new CartPage();

class CartPage {
    getCartItem() {
        return cy.get(".cart_item");
    }
    clickCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}