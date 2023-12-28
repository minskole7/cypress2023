/// <reference types="cypress" />

//children() , prev() , next() , nextAll() , prevAll() ,next(),siblings()
// developer
// javscript ??
// create element 
// update element 
// retrive element 
// delete  element 

// add attribute 
// update attribute 
// delete attribute 
// retrive attribute
// user action

// tester 
//selection of the element 

describe('traversal method',function(){

    it('revision day1 ',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // chidren()
        cy.get('traversal-drinks-list').children().should('have.length',5)
        // next()
        cy.get('#coffe').next().should('have.attr',"id","tea")
        // prev()
        cy.get('#tea').prev().should('have.attr',"id","coffe")
        //prevAll()
        cy.get('#milk').prevAll().should("have.length",2)
        //nextAll()
        cy.get('#milk').nextAll().should('have.length',2)
        //siblings()
        cy.get('#milk').siblings().should('have.length',4)
    })
    

    it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
    })

    
    it.only('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })


    it.only('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    //first() 
    it.only('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.attr','id','coffee')
    })

    // last()
    it.only('To get the last DOM element within elements, use the .last() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.attr','id','sugar')
    })

    //eq()
    it.only('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.attr','id','milk')
    })

    // parent()
    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.attr','class','traversal-drinks-list')

    })


    // Mahesh -  Cypress / Playwright  -- Wendesday , Monday
    // Sarika  - Selenium - Python   --- Monday 
    // Mayuri  - Wendesday


})



