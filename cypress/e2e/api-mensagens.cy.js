describe('Api Adopet', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNzcwZTVlNC1iMmZlLTQxOGQtYjhiMC1mMTQ0ZTA4OWM3ZTEiLCJhZG9wdGVyTmFtZSI6IlJpY2FyZG8iLCJpYXQiOjE3NjgzMTA4MjAsImV4cCI6MTc2ODU3MDAyMH0.Fq1CHMiZNZbEFNmzgw6DqSNonMeQqMFNXyNLzuwIQj0`

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/a770e5e4-b2fe-418d-b8b0-f144e089c7e1',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})