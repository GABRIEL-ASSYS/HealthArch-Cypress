describe('Login e registro de usuarios HealthArch', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('Verificar se usuario esta logado', () => {
        cy.get('#sejaBemVindo').should('be.visible');
    })

    it('Fazer login de usuario valido', () => {
        cy.get('#inputEmailLogin').type('engs-gabrieloliveira@camporeal.edu.br');
        cy.get('#inputSenhaLogin').type('12345678');
        cy.get('#botaoEntrarLogin').click();
    })
    
    it('Fazer login de usuario invalido', () => {
        cy.get('#inputEmailLogin').type('gabrieloliveira@gmail.com.br');
        cy.get('#inputSenhaLogin').type('1234');
        cy.get('#botaoEntrarLogin').click();
    })

    it('Cadastrar novo usuario', () => {
        cy.get('#inputEmailLogin').type('brachak2001@gmail.com');
        cy.get('#inputSenhaLogin').type('123456');
        cy.get('#botaoCadastrarLogin').click();
    })
})