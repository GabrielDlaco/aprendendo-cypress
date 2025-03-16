/// <reference types ="cypress"/>

describe("Verificação geral login", () => {
  it("Verificar se o formulário de login existe", () => {
    cy.visit("http://127.0.0.1:5500/frontend/revisao/teste01.html")

    cy.get('#login-form').should("exist")
  })
  it("Preencher o login com os valores corretos", () => {
    cy.visit("http://127.0.0.1:5500/frontend/revisao/teste01.html")

    cy.get("#username").type("admin")
    cy.get("#password").type("1234")
    cy.get("button").click()
    cy.get("#message").should("have.text", "Login bem-sucedido!")
  })
  it("Preencher o login com valores inválidos", () => {
    cy.visit("http://127.0.0.1:5500/frontend/revisao/teste01.html")

    cy.get("#username").type("user")
    cy.get("#password").type("123")
    cy.get("button").click()
    cy.get("#message").should("have.text", "Usuário ou senha incorretos.")
  })
  it.only("Verifica se o botão está habilitado com campos vazios", () => {
    cy.visit("http://127.0.0.1:5500/frontend/revisao/teste01.html")

    // 1. Verifica se o botão começa desativado
    cy.get('button').should('be.disabled');

    // 2. Preenche apenas o campo de usuário e verifica se o botão continua desativado
    cy.get('#username').type('admin');
    cy.get('button').should('be.disabled');

   // 3. Preenche o campo de senha e verifica se o botão é ativado
    cy.get('#password').type('1234');
    cy.get('button').should('not.be.disabled');

    // 4. Apaga o campo de usuário e verifica se o botão volta a ser desativado
    cy.get('#username').clear();
    cy.get('button').should('be.disabled');
  })
})

