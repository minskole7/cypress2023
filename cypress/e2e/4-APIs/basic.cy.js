/// <reference types="cypress" />
describe('API testing',function(){
    it('verify the status code for GET request',function(){
        cy.request({
            url:"https://reqres.in/api/users?page=2",
            method:"GET"
        }).then(function(response){
            expect(response.status).to.eq(200)
        })

    })

    it('verify the status code for post request',function(){
        cy.request({
            url:"https://reqres.in/api/users",
            method:"POST",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(201)
        })


    })

    it('verify the status code for PUT request',function(){
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "poorva",
                "job": "Tester"
            }
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    it('verify the status code for delete reques',function(){
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
        }).then(function(response){
            expect(response.status).to.eq(204)
        })

    })

})