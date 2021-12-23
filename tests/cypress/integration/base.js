describe('Open pages in browser', function () {
  describe('Visit site', function () {
    it('should open index page', function () {
      cy.visit('/');
    });
  })

  /**
   * Check for a required vars
   */
  describe('Load frontend env script', function () {
    before('Get script file', function () {
      cy.getDotenv();
    })

    it('should have SERVER_ENDPOINT var', function () {
      cy.window()
        .its('config')
        .should('have.property', 'SERVER_ENDPOINT');
    });

    it('should have CTPROTO_ENDPOINT var', function () {
      cy.window()
        .its('config')
        .should('have.property', 'CTPROTO_ENDPOINT');
    });

    it('should have CTPROTO_TOKEN', function () {
      cy.window()
        .its('config')
        .should('have.property', 'CTPROTO_TOKEN');
    });
  });
});
