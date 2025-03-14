/// <reference types ="cypress"/>

describe("Preencher os campos do formulário", () =>{
    it("Preencher todos os campos do formulário", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/teste02.html")

        cy.get('#name').type("Gabriel")
        cy.get('#email').type("gabriel.laco@aluno.senai.br")
        cy.get('#message').type("Esta é minha menssagem")
        cy.get('button').click()

        cy.get('#success-message').should("have.text", "Mensagem enviada com sucesso!")
    })
})
