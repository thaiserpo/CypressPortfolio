// Testing the form Pedido Castra - GAAR website
/// <reference types="cypress" />
describe('template spec', () => { // test suite
    beforeEach('test', () => { // test setup
    cy.intercept('GET', 'https://googleads.g.doubleclick.net/*', { // intercept the GET request
        statusCode: 204,
        body: {}
    }).as('blockGoogleAds')
    })
    it('form pedido castra', () => {
      cy.visit('https://gaarcampinas.org/area/formpedidocastraa.php')
      cy.get(':nth-child(2) > #souprotetor').check() //radio button
      cy.get('#protetor').type('71') //text field
      cy.get('#quemvailevar').type('THAISE TESTE')
      cy.get('#obspedido').type('TESTE DE OBS')
      cy.get('#Não').check()
      cy.get('#nomedoanimal').type('TESTE DE OBS')
      cy.get('#dtnascanimal').type('2021-01-01')
      cy.get('#peso').type('1')
      cy.get('#Canina').check() 
      cy.get('#SRD').check()
      if (!cy.get('#Fêmea').check()) {
        cy.log('Radio button não está checado')
      } else {
        cy.log('Radio button está checado')
      }
      cy.get(':nth-child(6) > #vetcao').check()
      cy.get(':nth-child(3) > #horario').click()
      cy.get('#Cypress').check({ force: true }) // flag test cypress
      //cy.get('.btn').click() //submit button
    //cy.wait(2000) // wait for 2 seconds to observe the result
    cy.end() // stop the execution
 
    })
  }
  
  
  
  )