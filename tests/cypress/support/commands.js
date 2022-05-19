import { CTProtoClient } from 'ctproto';

/**
 * Get env vars for the frontend
 */
Cypress.Commands.add('getDotenv', () => {
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
