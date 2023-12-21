// https://the-internet.herokuapp.com/javascript_alerts


/// <reference types="cypress" />

describe('alerts in cypress', function () {
    it('verify the js alert', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.get('button').contains('Click for JS Alert').click()
        cy.get('#result').should("have.text", 'You successfully clicked an alert')
    })

    it.only('verify the confirm alert - ok', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('button').contains('Click for JS Confirm').click()
        cy.get('#result').should("have.text", 'You clicked: Ok')
    })

    it.only('verify the confirm alert - cancel', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('button').contains('Click for JS Confirm').click()
        cy.get('#result').should("have.text", 'You clicked: Cancel')
    })

    // it.only('verify the prompt- ok', function () {
    //     const firstName = "chinmay"
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.get('button').contains('Click for JS Prompt').click()
    //     cy.on('window:prompt',function(str){
    //         expect(str).to.eq('I am a JS prompt')
    //         return firstName
    //     })
    //     cy.get('#result').should('have.text',`You entered: ${firstName}`)

    // })

    it.only('verify the prompt- ok stub', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (win) {
            cy.stub(win,'prompt').returns('chinmay')
            cy.get('button').contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text',`You entered: chinmay`)
    })








})