/// <reference types ="cypress"/>

describe("Testar com os campos vazios", () =>{
    it("Testar com os campos vazios", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/teste02.html")

        cy.get('#button').click()
    })
})