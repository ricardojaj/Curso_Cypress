describe('Api Adopet', () =>{
    

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/a770e5e4-b2fe-418d-b8b0-f144e089c7e1',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})
