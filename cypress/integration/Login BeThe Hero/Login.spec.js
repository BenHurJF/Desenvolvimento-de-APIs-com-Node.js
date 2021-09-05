/// <reference types="cypress" />
// Autocomplet Commands Cypress

describe('Acessar sistema BeThe Hero', () => {
    it('Visit BeThe Hero', () => {
        cy.visit('https://bethehero-frontend.netlify.app/');
    });

    it('Não tenho cadastro', () => {
        cy.get('.back-link').click();
    });

});

describe('Preencher Formulário de cadastro', () => {
    it('Inserir Nome da ONG', () => {
        cy.get('[placeholder="Nome da ONG"]').type('Testes-Cypress');
    });

    it('Inserir E-email', () => {
        cy.get('[type="email"]').type('beiujeffer@gmail.com');
    });

    it('Inserir Whatsapp', () => {
        cy.get('[placeholder="Whatsapp"]').type('61985824617');
    });

    it('Informar Cidade', () => {
        cy.get('[placeholder="Cidade"]').type('Brasilia');
    });

    it('UF', () => {
        cy.get('[placeholder="UF"]').type('DF');
    });

    it('Cadastrar ong', () => {
        cy.get('.button').click();
    });

});