describe('Login e registro de usuarios HealthArch', () => {

    beforeEach(() => {
        cy.visit('https://health-arch-testes-qvhxbntar-gabriel-assys.vercel.app/LoginPage')
    })

    it('Fazer login de usuario valido', () => {
        cy.get('#inputEmailLogin').type('engs-gabrieloliveira@camporeal.edu.br');
        cy.get('#inputSenhaLogin').type('12345678');
        cy.get('#botaoEntrarLogin').click();
        cy.get('#sejaBemVindo').should('be.visible');
    })
    
    it('Fazer login de usuario invalido', () => {
        cy.get('#inputEmailLogin').type('gabrieloliveira@gmail.com.br');
        cy.get('#inputSenhaLogin').type('1234');
        cy.get('#botaoEntrarLogin').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal("Usuário ou senha inválidos!");
            cy.get('body').type('{enter}');
        })
    })

    it('Cadastrar novo usuario valido', () => {
        cy.get('#inputEmailLogin').type('brachak2001@gmail.com');
        cy.get('#inputSenhaLogin').type('12345678');
        cy.get('#botaoCadastrarLogin').click();
        cy.get('#sejaBemVindo').should('be.visible');
    })
    
    it('Cadastrar novo usuarios invalido', () => {
        cy.get('#inputEmailLogin').type('exemplo@camporeal.edu.br')
        cy.get('#inputSenhaLogin').type('123');
        cy.get('#botaoCadastrarLogin').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal("Senha muito fraca!");
            cy.get('body').type('{enter}');
        })
    });
})