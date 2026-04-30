class ProductsPage {
    getTitle() {
      return cy.get('[data-test="title"]');
    }
  
    addProductToCart(product) {
      cy.get(product.addToCartSelector).click();
    }
  
    openCart() {
      cy.get(".shopping_cart_link").click();
    }
  
    getCartBadge() {
      return cy.get(".shopping_cart_badge");
    }
  }
  
  export default new ProductsPage();