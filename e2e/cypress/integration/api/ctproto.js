import { CTProtoClient } from 'ctproto';

describe('Ctproto API', function () {
  let client;

  before('Initialize ctproto', async function () {
    /** Get env vars */
    window.config = (await cy.request('/dotenv.json')).body;

    client = new CTProtoClient({
      apiUrl: window.config.CTPROTO_ENDPOINT,
      authRequestPayload: {
        token: window.config.CTPROTO_TOKEN,
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

    expect(response, 'Response').to.have.key('projects');
    // expect(response.projects.length, 'Number of projects').to.eq(2);
  });
});
