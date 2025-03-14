/// <reference types ="cypress"/>

describe("Testar com credenciais inválidas", () =>{
    it("Teste com credenciais inválidas", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/teste01.html")

        cy.get('#email').type("usexmple")
        cy.get('#senha').type("pod123")
        cy.get('#button').click()
    })
})