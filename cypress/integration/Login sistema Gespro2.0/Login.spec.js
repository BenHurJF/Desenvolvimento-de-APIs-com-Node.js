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

describe('Inserir credencial - CPF', () => {
    it('Inserir CPF', () => {
        
    });
});

describe('Inserir credencial - Senha', () => {
    it('Inserir senha', () => {
        
    });
});