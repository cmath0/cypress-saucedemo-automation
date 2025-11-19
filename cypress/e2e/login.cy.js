import LoginPage from '../pages/LoginPage'
import { assertPageTitle } from '../utils/assert-utils.js'

describe('Login Saucedemo', () => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.visit()
    })

    it('Deve efetuar login com sucesso e exibir página de Produtos ao inserir usuário e senha válidos', () => {
        cy.fixture('users.json').then(users => {
            const user = users.standardUser

            loginPage.login(user.username, user.password)

            assertPageTitle('Products')
        })
    })

    it('Deve exibir mensagem de erro ao tentar login com usuário válido e senha incorreta', () => {
        cy.fixture('users.json').then(users => {
            const user = users.standardUser

            loginPage.login(user.username, 'senha_invalida')

            cy.contains('span[data-test="title"]', 'Products').should('not.exist')
            cy.contains('h3[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
        })
    })

    it('Deve exibir mensagem de erro ao tentar login com usuário bloqueado', () => {
        cy.fixture('users.json').then(users => {
            const user = users.lockedOutUser

            loginPage.login(user.username, user.password)

            cy.contains('span[data-test="title"]', 'Products').should('not.exist')
            cy.contains('h3[data-test="error"]', 'Epic sadface: Sorry, this user has been locked out.')
        })
    })
})