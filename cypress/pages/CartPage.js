class CartPage {
    getCartItem() {
        return cy.get(".cart_item");
    }
    clickCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}

export default new CartPage();