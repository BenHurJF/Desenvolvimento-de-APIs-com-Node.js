module.exports = 'commands.js';

    Cypress.Commands.add('confirmCaptcha', function verifyCaptcha () {
        cy.get('iframe')
          .first()
          .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
          })
      });