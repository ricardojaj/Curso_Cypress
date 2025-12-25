describe('Verificação da pagina de pets disponiveis para adoção', () => {
  it('Deve carregar a pagina com a lista de pets disponiveis', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis').click();
  })
})