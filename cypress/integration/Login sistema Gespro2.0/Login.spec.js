/// <reference types="cypress" />
// Autocomplet Commands Cypress

describe('Acessar sistema', () => {
    it('Gespro 2.0', () => {
        cy.visit('https://gespro.tst.mtur.basis.com.br/apigespro/api/public/login'),
        cy.request('https://gespro.tst.mtur.basis.com.br/apigespro/api/public/login');

    });

    it('Botão (Entrar) acessar page de login', () => {
        cy.get('.button-outline').click()
    });
});

describe('Inserir credenciais', () => {
    it('Inserir CPF', () => {
        //pass: 020.439.411-27
        cy.get('#accountId').type('020.439.411-27');
    });

    it('Avançar', () => {
        cy.get('.button-ok').click()
    });

    it('Inserir senha', () => {
        
    });

    it('Entrar', () => {
       cy.get('#submit-button').click()
});

});