/// <reference types="cypress" />


describe('verify the POST , PUT call', function () {

    it('verify the POST request', function () {

        cy.fixture('payload').then(function(el){
            cy.request({
                url: "https://reqres.in/api/users",
                method: "POST",
                body: el
            })
            .then(function(response){
                cy.log(response)
            })

        })
            

       



    })


})