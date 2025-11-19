class CartPage {
    checkout() {
        cy.get('button[data-test="checkout"]').click()
    }

    getProductsName() {
        return cy.get('div[data-test="inventory-item-name"]')
    }
}

export default CartPage