
import RegisterPage from './pageObjects/registerPage';
import LoginPage from './pageObjects/loginPage';

describe('register and log in parent', () => {

    it('register new accont', () => {
        cy.visit('http://test.nationalsportsid.com/register?type=2&embed=0');
        var registerPage = new RegisterPage();
        registerPage.firtstName().click().type('Jan')
        registerPage.lastName().click().type('Kowalski')
        registerPage.birthDate().click()
        cy.get('.datepicker-years').contains('2022').click()
        cy.get('.datepicker-months').contains('May').click()
        cy.get('.table-condensed').contains('17').click()
        registerPage.submitChild().click()
        registerPage.newPlayer().click()
        registerPage.nextStep().click()
        registerPage.registrationFirstName().click().type('Marcin')
        registerPage.registrationLastName().click().type('Duda')
        registerPage.addressLine().click().type('ul. Tajna')
        registerPage.addressCity().click().type('Malemiasto')
        registerPage.addressState().click().type('średnioPolska')
        registerPage.addressZipCode().click().type('34-730')
        registerPage.addressCountry().select(166)
        registerPage.registrationTimezone().select('Europe/Warsaw')
        let mail = makeEmail()
        cy.readFile("cypress/fixtures/example.json", (err, data) => {
            if (err) {
                return console.error(err);
            };
        }).then((data) => {
            data.email = mail
            cy.writeFile("cypress/fixtures/example.json", JSON.stringify(data))
        })
        registerPage.registrationEmail().click().type(mail)
        registerPage.plainPasswordFirst().click().type('Netid2020!')
        registerPage.plainPasswordSecond().click().type('Netid2020!')
        registerPage.enableMode().click()
        registerPage.phoneNumber().click().type('7803743076')
        cy.clickRecaptcha()
        cy.get('.register-terms > .checkbox > label').click('left')
        cy.get('#register').click()

        cy.url().should('eq', 'http://test.nationalsportsid.com/profile/edit/verify')
        

    })

    it('as parent Ican login  and find child', () => {
        cy.visit('http://test.nationalsportsid.com/login');
        var loginPage = new LoginPage();
        loginPage.password().click().type('Netid2020!')
        cy.fixture('example').then(data => {
            loginPage.username().click().type(data.email)
        })
        loginPage.loginButton()
            .should('have.class', 'btn-primary')
            .click()
        cy.url().should('eq', 'http://test.nationalsportsid.com/dashboard/')
        cy.contains('Jan Kowalski')
    })
})

let makeEmail = () => {
    let strValues = "abcdefg12345";
    let strEmail = "";
    let strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = `${strEmail}@`;
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = `${strEmail}.com`

    return strEmail;
}