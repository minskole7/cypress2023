/// <reference types="cypress" />


describe('tranversal method',function(){

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-button-states').children().should('have.length',4)
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").prev().should('have.text','Figs')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").prev().should('have.text','Asparagus')
    })


    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").nextAll().should('have.length',4)
        cy.get("#veggie").nextAll().should('have.length.greaterThan', 2);
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").prevAll().should('have.length',6)
        cy.get("#veggie").prevAll().should('have.length.greaterThan', 5);
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").siblings().should('have.length')
    })

})