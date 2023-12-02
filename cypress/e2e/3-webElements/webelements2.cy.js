/// <reference types="cypress" />

// click()

describe('webelements method',function(){

    it('click() - click on a function',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("chinmay")
        cy.get('[name="last_name"]').type("deshpande")
        cy.get('[name="email"]').type("chinmaydeshpande010@gmail.com")
        cy.get('[name="message"]').type("I am learning js")
        cy.get('[type="submit"]').click() // click()
        cy.get('h1').should('exist')

    })

    it('type() - type on input element',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("poorva") // type()
        cy.get('[name="last_name"]').type("vyas")
        cy.get('[name="email"]').type("poorvavyas29@gmail.com")
        cy.get('[name="message"]').type("I am learning python")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('exist')

    })

    it('clear() - clearing the element',function(){
        // arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // action
        cy.get('[name= "first_name"]').as("firstName")
        cy.get('@firstName').type('chinmay deshpande')
        cy.get('@firstName').clear()
        // assertion
        cy.get('@firstName').should('have.text','')

    })
   
    // <h2 name="contactme" class="section_header">CONTACT US</h2>

    it('getting attribute and verifying attribute',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.attr','class')
        cy.get('h2').should('have.attr','name')
        cy.get('h2').should('have.attr','class','section_header')
        cy.get('h2').should('have.attr','name','contactme')
        cy.get('h2').invoke('attr','class').then(function(text){
            cy.log(text)
        })
        cy.get('h2').invoke('attr','name').then(function(text){
            cy.log(text)
        })

    })

    it('getting text and verifying the text of element',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.text','CONTACT US')
        cy.get('h2').invoke('text').then(function(txt){
            cy.log(txt)
        })
        // element visible or not
        cy.get('h2').should('be.visible')
    })


    it('element is selected',function(){
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="pumpkin"]').should('be.checked')
    })

    it('elemnet is enabled',function(){
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="cabbage"]').should('be.disabled')
    })






   


})

// selected or not 

// enabled or not