class registerPage {
    firtstName() {
        return cy.get('#firstName')
    }
    lastName() {
        return cy.get('#lastName')
    }
    birthDate() {
        return cy.get('#birthDate')
    }
    submitChild() {
        return cy.get('#submit-child')
    }
    newPlayer() {
        return cy.get('#new-player')
    }
    nextStep() {
        return cy.get('#next-step')
    }
    registrationFirstName() {
        return cy.get('#hoopalert_user_parent_registration_firstName')
    }
    registrationLastName() {
        return cy.get('#hoopalert_user_parent_registration_lastName')
    }
    addressLine() {
        return cy.get('#hoopalert_user_parent_registration_address_addressLine')
    }
    addressCity() {
        return cy.get('#hoopalert_user_parent_registration_address_city')
    }
    addressState() {
        return cy.get('#hoopalert_user_parent_registration_address_state')
    }
    addressZipCode() {
        return cy.get('#hoopalert_user_parent_registration_address_zipCode')
    }
    addressCountry() {
        return cy.get('#hoopalert_user_parent_registration_address_country')
    }
    registrationTimezone() {
        return cy.get('#hoopalert_user_parent_registration_timezone')
    }
    registrationEmail() {
        return cy.get('#hoopalert_user_parent_registration_email')
    }
    plainPasswordFirst() {
        return cy.get('#hoopalert_user_parent_registration_plainPassword_first')
    }
    plainPasswordSecond() {
        return cy.get('#hoopalert_user_parent_registration_plainPassword_second')
    }
    enableMode() {
        return cy.get('#hoopalert_user_parent_registration_enableMode > :nth-child(1) > .required')
    }
    phoneNumber() {
        return cy.get('#hoopalert_user_parent_registration_phoneNumbers_0_phoneNumber')
    }
    registerButon() {
        return cy.get('#register')
    }
    registerTerms() {
        return cy.get('.register-terms > .checkbox > label')
    }
}
export default registerPage