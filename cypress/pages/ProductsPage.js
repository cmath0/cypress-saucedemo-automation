class ProductsPage {
  visit() {
    cy.visit('/inventory.html')
  }

  addProductToCart(productButtonTestId) {
    cy.get(`button[data-test="${productButtonTestId}"]`).click()
  }

  goToCart() {
    cy.get('a[data-test="shopping-cart-link"]').click()
  }

  getShoppingCartBadge() {
    return cy.get('span[data-test="shopping-cart-badge"]')
  }
}

export default ProductsPage