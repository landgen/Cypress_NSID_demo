describe('register parent', () => {
    it('go to first site', () => {
        cy.visit('http://test.nationalsportsid.com/register?type=2&embed=0');
        cy.get('#firstName').click().type('Marcel')
        cy.get('#lastName').click().type('Marcel')
        let date = new Date()
        /*date.setDate(date.getDate() + 5)
        let futureDay = date.getDay()
        let futureMonth = date.getMonth()
*/
        cy.get('#birthDate').click()
        cy.get('.datepicker-years').contains('2022').click()
        cy.get('.datepicker-months').contains('May').click()
        cy.get('.table-condensed').contains('17').click()
        cy.get('#submit-child').click()
    })
})