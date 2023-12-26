describe('verify the contact us form',function(){


    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name = "first_name"]').type("chinmay")
        cy.get('[name = "last_name"]').type("deshpande")
        cy.get('[name = "email"]').type("chinmaydeshpandne010@gmail.com")
        cy.get('[name = "message"]').type("I am learning js")
    })

    it('verify the sumbit form',function(){
        cy.get('input[type= "submit"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")

    })

    it('verify the reset functionality',function(){
        cy.get('input[type= "reset"]').click()
        cy.get('[name = "first_name"]').should('have.text',"")

    })

    afterEach(function(){
        cy.clearAllCookies()
    })


})