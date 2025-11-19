class LoginPage {
  visit() {
    cy.visit('/')
  }

  typeUsername(username) {
    cy.get('input[data-test="username"]').type(username, { delay: 2})
  }

  typePassword(password) {
    cy.get('input[data-test="password"]').type(password, { delay: 2})
  }

  clickLogin() {
    cy.get('input[type="submit"][data-test="login-button"]').click()
  }

  login(username, password) {
    this.visit()
    this.typeUsername(username)
    this.typePassword(password)
    this.clickLogin()
  }

  loginWithStandardUser() {
    cy.fixture('users.json').then(users => {
        const user = users.standardUser

        this.login(user.username, user.password)
    })
  }
}

export default LoginPage