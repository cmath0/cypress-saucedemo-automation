import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import { assertPageTitle } from '../utils/assert-utils.js'

describe('Fluxo completo de realização de compra', () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()
    
    it('Logar, adicionar produtos ao carrinho e finalizar compra', () => {
        cy.fixture('users.json').then(users => {
            const user = users.standardUser

            loginPage.login(user.username, user.password)

            productsPage.addProductToCart('add-to-cart-sauce-labs-onesie')
            productsPage.addProductToCart('add-to-cart-sauce-labs-fleece-jacket')
            productsPage.getShoppingCartBadge().should('have.text', '2')
            productsPage.goToCart()

            assertPageTitle('Your Cart')
            cartPage.getProductsName().its(0).should('have.text', 'Sauce Labs Onesie')
            cartPage.getProductsName().its(1).should('have.text', 'Sauce Labs Fleece Jacket')
            cartPage.checkout()

            assertPageTitle('Checkout: Your Information')
            checkoutPage.typeCheckoutInformation('Matheus', 'Cardoso', '22456-789')
            checkoutPage.continueToOverview()

            assertPageTitle('Checkout: Overview')
            checkoutPage.getProductsNameOverview().its(0).should('have.text', 'Sauce Labs Onesie')
            checkoutPage.getProductsNameOverview().its(1).should('have.text', 'Sauce Labs Fleece Jacket')

            checkoutPage.finishPurchase()

            checkoutPage.getCompleteHeader().should('have.text', 'Thank you for your order!')
        })
    })
})