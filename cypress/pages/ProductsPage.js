export default new ProductsPage();

class ProductsPage {
    getTitle() {
        return cy.get('[data-test="Title"]');
    }
    addProductToCart(productSelector) {
        cy.get(productSelector).click();
    }
    openCart() {
        cy.get(".shopping_cart_link").click();
    }
    getCartBadge() {
        return cy.get(".shopping_cart_badge");
    }
}