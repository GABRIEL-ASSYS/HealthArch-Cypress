describe('Navegação da pagina', () => {

    beforeEach(() => {
        cy.visit('https://health-arch-testes.vercel.app/HomePage');
    })

    it('Ir para página de Login', () => {
        cy.get('#loginPageLink').click();
        cy.get('#paginaLogin').should('be.visible');
    });

    it('Ir para página Sobre', () => {
        cy.get('#sobrePageLink').click();
        cy.get('#paginaSobre').should('be.visible');
    });

    it('Ir para página de Consultas', () => {
        cy.get('#consultasPageLink').click();
        cy.get('#paginaConsultas').should('be.visible');
    })

    it('Ir para página Home', () => {
        cy.get('#homePageLink').click();
        cy.get('#paginaHome').should('be.visible');
    })
})