/// <reference types="cypress" />

// testscenario 
// testcase 

describe('working with webelements',function(){


    it('visit the webpage',function(){

      // visiting the url  
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
      // type into the input element


      // type() - method
      //<input name="first_name" type="text" class="feedback-input" placeholder="First Name">
      cy.get('input[name= "first_name"]').type("chinmay")
      cy.get('input[name= "last_name"]').type("deshpande")
      cy.get('input[name= "email"]').type("chinmaydeshpande010@gmail.com")
      cy.get('textarea[name = "message"]').type('I am learning cypress')
      
      //click()
      //cy.get('input[type="submit"]').click()


      //submit()
      //cy.get('#contact_form').submit()

      // clear()
      cy.get('input[name= "first_name"]').clear()


      // getAttribute()
      //<input name="first_name" type="text" class="feedback-input" placeholder="First Name">
      cy.get('input[name= "first_name"]').should('have.attr','name','first_name')
      cy.get('input[name= "first_name"]').then(function(el){
           cy.log(el.prop('name'))
           cy.log(el.prop('type'))
           cy.log(el.prop('class'))
           cy.log(el.prop('placeholder'))
      })

      cy.get('input[name= "first_name"]').invoke('attr','name').then(function(str){
         cy.log(str)
      })
      cy.get('input[name= "first_name"]').invoke('prop','name').then(function(str){
        cy.log(str)
      })














    })



})