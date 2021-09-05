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
        cy.get('[placeholder="Nome da ONG"]').type('TestesCypress');
    });

    it('Inserir E-email', () => {
        cy.get('[type="email"]').type('beiujeffer@hotmail.com');
    });

    it('Inserir Whatsapp', () => {
        cy.get('[placeholder="Whatsapp"]').type('61985824617');
    });

    it('Informar Cidade', () => {
        cy.get('[placeholder="Cidade"]').type('Brasília');
    });

    it('UF', () => {
        cy.get('[placeholder="UF"]').type('DF');
    });


    // routing
    // start server com cy.server()
    // criar rota = cy.rout()
    // atribuit rota = alias
    // sleep com cy.wait
    
    //cy.server();
    //cy.route('POST','**/ongs').as('postOng');

    it('Cadastrar ong', () => {
        cy.get('.button').click()
    });

});