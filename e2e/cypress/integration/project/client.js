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
        // cy.log('Authorization is success', data);
      },
      onMessage: (data) => {
        // cy.log('Incoming message: ', data);
      },
    });
  })

  it('Get all projects', async function () {
    const response = await client
      .send('get-projects', {
        workspaceId: 'test-test-test',
      });

    // cy.log('response', JSON.stringify(response));

    expect(response, 'Response').to.have.key('projects');
    expect(response.projects.length, 'Number of projects').to.eq(2);
  });
});
