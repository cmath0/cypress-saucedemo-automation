class ProductsPage {
  visit() {
    cy.visit('inventory.html')
  }

  addProductToCart(productButtonTestId) {
    cy.get(`button[data-test="${productButtonTestId}"]`).click()
  }

  removeProductFromCart(productButtonTestId) {
    cy.get(`button[data-test="${productButtonTestId}"]`).click()
  }

  goToProductDetails(productName) {
    cy.contains('div[data-test="inventory-item-name"]', productName).click()
  }

  goToCart() {
    cy.get('a[data-test="shopping-cart-link"]').click()
  }

  sortByNameAsc() {
    this.getSortProductsSelector().select('az')
  }

  sortByNameDesc() {
    this.getSortProductsSelector().select('za')
  }

  sortByPriceAsc() {
    this.getSortProductsSelector().select('lohi')
  }

  sortByPriceDesc() {
    this.getSortProductsSelector().select('hilo')
  }

  getSortProductsSelector() {
    return cy.get('select[data-test="product-sort-container"]')
  }

  getProductsNames() {
    return cy.get('div[data-test="inventory-item-name"]')
  }

  getShoppingCartBadge() {
    return cy.get('span[data-test="shopping-cart-badge"]')
  }

  getButtonBackToProducts() {
    return cy.get('button[data-test="back-to-products"]')
  }
}

export default ProductsPage