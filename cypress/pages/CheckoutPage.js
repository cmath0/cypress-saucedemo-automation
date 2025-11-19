class CheckoutPage {
    typeCheckoutInformation(firstName, lastName, zipPostalCode) {
        cy.get('input[data-test="firstName"]').type(firstName, { delay: 2 })
        cy.get('input[data-test="lastName"]').type(lastName, { delay: 2 })
        cy.get('input[data-test="postalCode"]').type(zipPostalCode, { delay: 2 })
    }

    continueToOverview() {
        cy.get('input[type="submit"][data-test="continue"]').click()
    }
    
    finishPurchase() {
        cy.get('button[data-test="finish"]').click()
    }

    getProductsNameOverview() {
        return cy.get('div[data-test="inventory-item-name"]')
    }

    getCompleteHeader() {
        return cy.get('h2[data-test="complete-header"]')
    }
}

export default CheckoutPage