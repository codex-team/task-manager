import { CTProtoClient } from 'ctproto';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getDotenv', () => {
  /** Get env vars */
  cy.request('/dotenv.js')
    .its('body')
    .then((rawScript) => {
      cy.window()
        .then(win => {
          win.eval(rawScript);
        })
    })
})

/**
 * Set up CTProto client
 */
Cypress.Commands.add('initCtproto', () => {
  cy.getDotenv();

  return cy.window()
    .then(win => {
      const client = new CTProtoClient({
        apiUrl: win.config.CTPROTO_ENDPOINT,
        authRequestPayload: {
          token: win.config.CTPROTO_TOKEN,
        },
        onAuth: (data) => {},
        onMessage: (data) => {},
      });

      return client;
    })
})
