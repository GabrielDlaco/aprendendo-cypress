/// <reference types ="cypress"/>

describe("Testar para que o login seja bem-sucessido", () =>{
    it("Verificar se o login foi bem-seucessido", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/index.html")

        cy.get('#email').type("gabriel.laco@aluno.senai.br")
        cy.get('#senha').type("1234")
        cy.get('#login').click()
    })
})

describe("Testar com credenciais erradas", () =>{
    it("Testar com credenciais erradas", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/index.html")

        cy.get('#email').type("gel.l@alno.snai.b")
        cy.get('#senha').type("134")
        cy.get('#login').click()
        
    })
})

describe("Testar com campos não preenchidos", () =>{
    it("Testar com campos não preenchidos", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/index.html")

        cy.get('#login').click()
        
    })
})