describe('Cadastro de consultas', () => {

    beforeEach(() => {
        cy.visit('');
    })

    it('Adicionar consulta', () => {
        cy.get('#inputTituloConsutla').type('Exame de rotina');
        cy.get('#inputDescricaoConsulta').type('Apenas realizar os exames de rotina de prache.');
        cy.get('#inputHoraConsulta').type('11:00')
        cy.get('#botaoCadastrarConsulta').click();
    })

    it('Editar consulta', () => {
        cy.get('#inputHoraConsulta').type('12:00');
        cy.get('#botaoEditaConsulta').click();
    });

    it('Buscar consulta', () => {
        cy.get('#inputTituloConsulta').type('Exame de rotina');
        cy.get('#botaoBuscarConsulta').click();
    })

    it('Excluir consulta', () => {
        cy.get('listaBuscaConsulta__item').should('be.visible');
        cy.get('#botaoExcluirConsulta').click();
    })
})