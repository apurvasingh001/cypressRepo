import LonginPage from '../Pages/LoginPage'
import data from '../fixtures/example.json'

const loginPage = new LonginPage()
describe('TestSuite', () => {

it('TC01', () => {
    cy.visit('/')
    loginPage.login(data.username, data.password, {timeout: 10000 })
    cy.get('.oxd-brand-banner > img').should('be.visible', {timeout: 10000 })
    //cy.screenshot()
});



it('TC02', () => {
    cy.visit('/')
    loginPage.login(data.username, data.password, {timeout: 10000 })
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-body')
    .find('.oxd-table-row')
    .eq(14) // Access a specific row
    .scrollIntoView()
    .should('contain', 'tester');
   
    cy.get('.oxd-brand-banner > img').should('be.visible', {timeout: 10000 })
    //cy.screenshot()
});


    
});