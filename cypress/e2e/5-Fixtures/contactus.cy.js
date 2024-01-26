/// <reference types="cypress" />
import ud from "../../fixtures/contact2.json"
import ue from "../../fixtures/contact3.js"

let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    email: "chinmaydeshpadne010@gmail.com",
    message: "I am learning python"
}

describe('verify the contact us form', function () {

    let userdata = undefined
    before(function () {
        cy.fixture('contact2').then(function (users) {
            userdata = users
        })
    })

    it('contact us form in testcase', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type("chinmay")
        cy.get('[name= "last_name"]').type("deshpande")
        cy.get('[name= "email"]').type("chinmaydeshpande010@gmail.com")
        cy.get('[name= "message"]').type("I am learning js")
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })

    it('contact us form from above defined object', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(info.firstName)
        cy.get('[name= "last_name"]').type(info.lastName)
        cy.get('[name= "email"]').type(info.email)
        cy.get('[name= "message"]').type(info.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })


    it('contact us from contact', function () {

        cy.fixture('contact').then(function (data) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name= "first_name"]').type(data.firstName)
            cy.get('[name= "last_name"]').type(data.lastName)
            cy.get('[name= "email"]').type(data.email)
            cy.get('[name= "message"]').type(data.message)
            cy.get('[type= "submit"]').click()
            cy.get('h1').should('have.text', "Thank You for your Message!")
        })
    })



    it.only('contact us form with user data two from contact2', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(userdata.userdataTwo.firstName)
        cy.get('[name= "last_name"]').type(userdata.userdataTwo.lastName)
        cy.get('[name= "email"]').type(userdata.userdataTwo.email)
        cy.get('[name= "message"]').type(userdata.userdataTwo.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")
    })


    it.only('contact us form with user data one from contact 2', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(userdata.userdataOne.firstName)
        cy.get('[name= "last_name"]').type(userdata.userdataOne.lastName)
        cy.get('[name= "email"]').type(userdata.userdataOne.email)
        cy.get('[name= "message"]').type(userdata.userdataOne.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")

    })


    
    it.only('contact us form with user data from import json', function () {
       cy.log(ud)
       

    })

    it.only('contact us form with user data from import js', function () {
        cy.log(ue)
        
 
     })
 









})