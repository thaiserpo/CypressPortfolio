describe('first test', () => { // test suite
    describe('findWebElements', () => { // test suite
        it('findWebElementsTest1', () => { // test case
            cy.visit('https://gaarcampinas.org/area/login.html')
            var textPage = cy.contains('Grupo de Apoio ao Animal de Rua')
            cy.log(textPage) // log message to be displayed
            cy.end() // stop the execution
        })
    })
})
