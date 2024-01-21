/// <reference types="cypress" />

describe('API testing for go rest APi - E2E', function () {

    // client id  secret Id ------> API call -----> token -----> other calls 
    let token = `cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517`
    it('Create a user , retrive , update , delete', function () {
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `chinmay${Math.floor(Math.random() * 1000)}@gmail.com`,
                "status": "active"
            }

        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.equal(201)
            return response.body.id
        })
         .then(function (id) {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: {
                        "name": "Tenali Ramakrishna",
                        "email": `chinmay${Math.floor(Math.random() * 1000)}@gmail.com`,
                        "status": "active"
                    }

                }).then(function (response) {
                    //cy.log(response)
                    expect(response.status).to.equal(200)
                    expect(response.body).to.have.keys(["email", "name", "id", "status", "gender"])
                    return
                })
                .then(function () {
                        cy.request({
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            method: 'DELETE',
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }).then(function (response) {
                            expect(response.status).to.eq(204)
                        })
                    })


            })






    })



})