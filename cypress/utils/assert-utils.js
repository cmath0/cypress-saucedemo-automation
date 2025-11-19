export function assertPageTitle(pageTitle) {
    cy.contains('span[data-test="title"]', pageTitle).should('be.visible')
}