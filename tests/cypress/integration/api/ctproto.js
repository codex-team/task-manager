describe('CTProto API', function () {
  beforeEach('Initialize CTProto', function () {
    cy.initCtproto()
      .as('client');
  })

  it('should get all projects', function () {
    cy.get('@client')
      .then(async client => {
        const response = await client.send('get-projects', {})

        expect(response, 'Response').to.have.key('projects');
      })
  });

  it('should create a new project', function () {
    /**
     * Get single project mock
     */
    cy.fixture('projects/single')
      .as('singleProject');

    cy.get('@client')
      .then(client => {
        cy.get('@singleProject')
          .then(async singleProject => {
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
          })
    })
  });
});
