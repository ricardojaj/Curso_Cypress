describe('Verificação dos botões da header', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

  it('Deve carregar a respectiva pagina apos click no botão', () => {
    cy.get('a[class="header__message"]').click();
    cy.get('a[class="header__home"]').click();
  })
})
