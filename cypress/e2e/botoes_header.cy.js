describe('Verificação dos botões da header', () => {
  it('Deve carregar a respectiva pagina apos click no botão', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[class="header__message"]').click();
    cy.get('a[class="header__home"]').click();
  })
})
