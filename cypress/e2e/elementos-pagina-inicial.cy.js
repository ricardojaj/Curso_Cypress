describe('Verificação de informações descritivas na pagina inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

  it('Deve carregar a pagina inicial com as informações descritivas', () => {
    cy.get('img[alt="Logo AdoPet"]').should('be.visible');
    cy.contains('p', 'Quem ama adota!').should('be.visible');
    cy.contains('p', 'Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  })
})
