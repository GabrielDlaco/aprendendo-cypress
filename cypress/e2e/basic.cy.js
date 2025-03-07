/// <reference types ="cypress"/>

describe("Pega elementos básicos", () =>{
  it("Verificar se a página se encontra disponível", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")

    cy.title().should("be.equal", "Campo de Treinamento")
    cy.title().should("contain", "Treinamento")
  })
  it("Encontrar e clicar no botão", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")

    cy.get('#buttonSimple').click().should("value", "Obrigado!")
  })
})

describe("Faz cadastro de usuário", () => {

  it("adiciona nome e sobrenome e cadastra", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html")

    cy.get('#formNome').type("Gabriel") 
    cy.get('[data-cy="dataSobrenome"]').type("Laço") 

    cy.get('#formSexoMasc').click().should("be.checked")

    cy.get('#formEscolaridade').select('Superior')

    cy.get('#formEsportes').select('futebol')

    cy.get('textarea').type("Essa é a sugestão")

    cy.get('#formCadastrar').click()
  })

})