describe('Navegação da pagina', () => {

    beforeEach(() => {
        cy.visit('');
    })

    it('Ir para página de Login', () => {
        cy.get('#loginPageLink').click();
        cy.get('.tituloLogin').should('be.visible');
    });

    it('Ir para página Sobre', () => {
        cy.get('#sobrePageLink').click();
        cy.get('.listaSobre').should('be.visible');
    });

    it('Ir para página de Consultas', () => {
        cy.get('#consultasPageLink').click();
        cy.get('.listaBuscaConsulta__titulo').should('be.visible');
    })

    it('Ir para página Home', () => {
        cy.get('#homePageLink').click();
        cy.get('.listaHome').should('be.visible');
    })
})