
class login {
    username() {
        return cy.get('#hoopalert_login_username')
    }
    password() {
        return cy.get('#hoopalert_login_password')
    }
    loginButton() {
        return cy.get('#_submit')
    }
}
export default login