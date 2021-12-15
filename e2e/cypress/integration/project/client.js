import { CTProtoClient } from 'ctproto';

describe('Ctproto API', function () {
  let client;

  before('Initialize ctproto', function () {
    client = new CTProtoClient({
      apiUrl: 'ws://localhost:3080/',
      authRequestPayload: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      },
      onAuth: (data) => {
        cy.log('Authorization is success', data);
      },
      onMessage: (data) => {
        cy.log('Incoming message: ', data);
      },
    });
  })

  it('Get all projects', function () {
    client
      .send('get-projects', {
        workspaceId: 'test-test-test',
      })
      .then(function (responsePayload) {
        expect(responsePayload).ownProperty('projects');
      })
  });
});
