describe('CTProto API', function () {
  beforeEach('Initialize CTProto', function () {
    cy.initCtproto()
      .as('client');
  });

  describe('get-projects', function () {
    it('should get all projects', function () {
      cy.wrap(this.client.send('get-projects', {}))
        .its('projects')
        .should('be.instanceOf', Array);
    });
  });

  describe('create-projects', function () {
    beforeEach('Send create-project message', function () {
      cy.fixture('projects/single')
        .as('singleProject')
        .then(singleProject => {
          cy.wrap(this.client.send('create-project', singleProject))
            .as('response');
        });
    });

    it('should create a new project with passed title', function () {
      cy.get('@response')
        .its('project')
        .should('have.property', 'title', this.singleProject.title);
    });

    it('should create a new project with passed picture', function () {
      cy.get('@response')
        .its('project')
        .should('have.property', 'picture', this.singleProject.picture);
    });

    it('should create a new project with passed messengerChannelUrl', function () {
      cy.get('@response')
        .its('project')
        .should('have.property', 'messengerChannelUrl', this.singleProject.messengerChannelUrl);
    });
  });

  describe('get-tasks', function () {
    beforeEach('Send get-tasks message', function () {
      cy.wrap(this.client.send('get-tasks', {}))
        .as('response');
    });

    it('should get all tasks', function () {
      cy.get('@response')
        .its('tasks')
        .should('be.instanceOf', Array);
    });
  });

  describe('create-task', function () {
    beforeEach('Send create-task message', function () {
      cy.fixture('tasks/single')
        .as('singleTask')
        .then(singleTask => {
          cy.wrap(this.client.send('create-task', singleTask))
            .as('response');
        });
    });

    it('should create a new task with passed text', function () {
      cy.get('@response')
        .its('task')
        .should('have.property', 'text', this.singleTask.text);
    });

    it('should create a new task with no assignees', function () {
      cy.get('@response')
        .its('task')
        .its('assignees')
        .should('be.instanceOf', Array)
        .should('be.empty');
    });
  });
});
