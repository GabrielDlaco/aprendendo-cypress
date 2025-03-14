/// <reference types ="cypress"/>

describe("Testar com credenciais válidas", () =>{
    it("Teste com credenciais válidas", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/teste01.html")

        cy.get('#email').type("user@example.com")
        cy.get('#senha').type("password123")
        cy.get('#button').click()
        cy.url().should('include', '/dashboard')
    })
})