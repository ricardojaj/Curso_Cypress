describe('Verificação da pagina de pets disponiveis para adoção', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Deve carregar a pagina com a lista de pets disponiveis', () => {
    cy.contains('a', 'Ver pets disponíveis').click();
  })
})