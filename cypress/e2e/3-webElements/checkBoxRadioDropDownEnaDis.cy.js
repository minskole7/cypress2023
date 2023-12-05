/// <reference types="cypress" />

describe('DropDown,Checkboxes and Radio Buttons', function () {

    it('should select a option from drop down', function () {
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // Action
        cy.get('#dropdowm-menu-1').select('Python')
        // Assertion
        cy.get('#dropdowm-menu-1').should('have.value', 'python')
        cy.get('#dropdowm-menu-2').select('Maven')
        cy.get('#dropdowm-menu-2').should('have.value', 'maven')

    })

    it.only('should select a check box', function () {
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // Action  - click()
        cy.get('input[value= "option-2"]').click()
        // Assetion
        cy.get('input[value= "option-2"]').should('be.checked')
        // check()
        cy.get('input[value= "option-3"]').check()
        cy.get('input[value= "option-3"]').should('be.checked')
        cy.get('input[value= "option-3"]').uncheck()
        cy.get('input[value= "option-3"]').should('not.be.checked')
    })

    it('should select radio buttons', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })






})