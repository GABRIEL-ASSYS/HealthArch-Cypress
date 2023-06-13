describe('Cadastro de consultas', () => {

    beforeEach(() => {
        cy.visit('https://health-arch-testes-qvhxbntar-gabriel-assys.vercel.app/ConsultasPage');
    })

    it('Adicionar consulta', () => {
        cy.get('#inputTituloConsulta').type('Exame de rotina');
        cy.get('#inputDescricaoConsulta').type('Apenas realizar os exames de rotina de prache.');
        cy.get('#inputHoraConsulta').type('11:00')
        cy.get('#botaoCadastrarConsulta').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal("Consulta cadastrada com sucesso!");
            cy.get('body').type('{enter}');
        })
    })

    it('Buscar consulta valida', () => {
        cy.get('#inputTituloConsulta').type('Exame de rotina');
        cy.get('#botaoBuscarConsulta').click();
    })

    it('Excluir consulta', () => {
        cy.get('#inputTituloConsulta').type('Exame de rotina')
        cy.get('#botaoExcluirConsulta').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal("Consulta excluída com sucesso!");
            cy.get('body').type('{enter}');
        })
    })
})