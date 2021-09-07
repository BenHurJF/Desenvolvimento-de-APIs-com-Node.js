/// <reference types="cypress" />
// Autocomplet Commands Cypress

describe('Acess system Sigelog home page - login', () => {
    it('Visit sigelog system', () => {
        cy.visit('https://simatex.tst.basis.com.br/sigelog-web/');
    });

    it('Login - CPF', () => {
        cy.get('.card > :nth-child(6)').type('81706464134');
    });

    it('Login - Password', () => {
        cy.get('.card > :nth-child(7)').type('Teste@123');
    });

    it('Login button', () => {
        if (cy.get('.btn-block')) {
            cy.wait(1000)
            cy.get('.btn-block').first().focus().click();
        } else { cy.wait(4000) }
    });
      
 });

describe('Profile', () => {
    it('Profile -> PERFIL_TESTE', () => {
       cy.get('#comando-perfil').click();
    });
    it('Check Profile', () => {
       cy.check
    });
});

//});