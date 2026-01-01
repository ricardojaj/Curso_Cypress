describe('Pagina de Cadastro', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastro('Marcela', 'MarcelaTeste123@email.com', 'Senha123', 'Senha123')
  })
})