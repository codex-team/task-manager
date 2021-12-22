import { CTProtoClient } from 'ctproto';

describe('CTProto API', function () {
  let client;

  before('Initialize CTProto', async function () {
    /** Get env vars */
    eval((await cy.request('/dotenv.js')).body);

    /**
     * Set up CTProto client
     */
    client = new CTProtoClient({
      apiUrl: window.config.CTPROTO_ENDPOINT,
      authRequestPayload: {
        token: window.config.CTPROTO_TOKEN,
      },
      onAuth: (data) => {},
      onMessage: (data) => {},
    });
  })

  it('should get all projects', async function () {
    const response = await client
      .send('get-projects', {});

    expect(response, 'Response').to.have.key('projects');
  });

  it('should create a new project', async function () {
    const singleProject = await cy.fixture('projects/single');

    const response = await client
      .send('create-project', singleProject);

    expect(response, 'Response').to.have.key('project');

    expect(response.project, 'Project title')
      .to.have.property('title')
      .to.eq(singleProject.title);

    expect(response.project, 'Project picture')
      .to.have.property('picture')
      .to.eq(singleProject.picture);

    expect(response.project, 'Project messengerChannelUrl')
      .to.have.property('messengerChannelUrl')
      .to.eq(singleProject.messengerChannelUrl);
  });
});
