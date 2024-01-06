/// <reference types="cypress" />

describe('verify the autosuggestive drop',function(){

    it('select a specific value from auto sugesstive drop',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.title().should('eq','WebDriver | Contact Us')
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > div').each(function($el,index,arr){
            if($el.text() === 'Almond'){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include','Almond')
            }

        }).then(function(){
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > div').each(function($el,index,arr){
                if($el.text() === 'Grapes'){
                    $el.trigger('click')
                    cy.get('#submit-button').click()
                    cy.url().should('include','Grapes')
                }
    
            })



        })
        
    })


})