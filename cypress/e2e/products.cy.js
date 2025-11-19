import ProductsPage from "../pages/ProductsPage"
import LoginPage from "../pages/LoginPage"

describe('Ações na página de Produtos', () => {
    const productsPage = new ProductsPage()

    beforeEach(() => {
        const loginPage = new LoginPage()
        loginPage.loginWithStandardUser()
    })

    it('Deve ordenar produtos em ordem alfabética', () => {
        productsPage.sortByNameDesc()
        productsPage.sortByNameAsc()
        productsPage.getProductsNames().as('produtos')

        cy.get('@produtos')
            .first().should('have.text', 'Sauce Labs Backpack')
        
        cy.get('@produtos')
            .last().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    })

    it('Deve ordenar produtos em ordem alfabética decrescente', () => {
        productsPage.sortByNameDesc()
        productsPage.getProductsNames().as('produtos')

        cy.get('@produtos')
            .first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
        
        cy.get('@produtos')
            .last().should('have.text', 'Sauce Labs Backpack')
    })

    it('Deve ordenar produtos do menor para o maior preço', () => {
        productsPage.sortByPriceAsc()
        productsPage.getProductsNames().as('produtos')

        cy.get('@produtos')
            .first().should('have.text', 'Sauce Labs Onesie')
        
        cy.get('@produtos')
            .last().should('have.text', 'Sauce Labs Fleece Jacket')
    })

    it('Deve ordenar produtos do maior para o menor preço', () => {
        productsPage.sortByPriceDesc()
        productsPage.getProductsNames().as('produtos')

        cy.get('@produtos')
            .first().should('have.text', 'Sauce Labs Fleece Jacket')
        
        cy.get('@produtos')
            .last().should('have.text', 'Sauce Labs Onesie')
    })

    it('Deve permitir adicionar e remover produtos do carrinho', () => {
        productsPage.addProductToCart('add-to-cart-sauce-labs-bolt-t-shirt')
        productsPage.addProductToCart('add-to-cart-test.allthethings()-t-shirt-(red)')

        productsPage.getShoppingCartBadge().should('have.text', 2)

        productsPage.removeProductFromCart('remove-sauce-labs-bolt-t-shirt')

        productsPage.getShoppingCartBadge().should('have.text', 1)
    })

    it('Deve direcionar à página de detalhes ao clicar sobre o nome do produto', () => {
        productsPage.goToProductDetails('Sauce Labs Bike Light')

        productsPage.getButtonBackToProducts().should('be.visible')
    })
})