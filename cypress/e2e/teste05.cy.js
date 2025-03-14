/// <reference types ="cypress"/>

describe("Abrir todos os links", () =>{
    it("Abrir todos os links", () =>{
        cy.visit("http://127.0.0.1:5500/frontend/teste03.html")

        cy.get('#home').click()
        cy.url().should('include', '/home')
        cy.visit("http://127.0.0.1:5500/frontend/teste03.html")

        cy.get('#about').click()
        cy.url().should('include', '/about')
        cy.visit("http://127.0.0.1:5500/frontend/teste03.html")

        cy.get('#services').click()
        cy.url().should('include', '/services')
        cy.visit("http://127.0.0.1:5500/frontend/teste03.html")

        cy.get('#contact').click()
        cy.url().should('include', '/contact')
        cy.visit("http://127.0.0.1:5500/frontend/teste03.html")
    })
})