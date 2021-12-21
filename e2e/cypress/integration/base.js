describe('Base routes', function () {
  it('Open index page', function () {
    cy.visit('/');
  });

  it('Load env vars for frontend', function () {
    cy.request('/dotenv.json')
      .then(response => {
        /**
         * Check for a required vars
         */
        expect(response.body).to.have.property('SERVER_ENDPOINT');
        expect(response.body).to.have.property('CTPROTO_ENDPOINT');
        expect(response.body).to.have.property('CTPROTO_TOKEN');
      });
  });
});
