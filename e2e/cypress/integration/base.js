describe('Base routes', function () {
  it('Open index page', function () {
    cy.visit('/');
  });

  it('Load env vars for frontend', async function () {
    /** Get env vars */
    eval((await cy.request('/dotenv.js')).body);

    /**
     * Check for a required vars
     */
    expect(window.config).to.have.property('SERVER_ENDPOINT');
    expect(window.config).to.have.property('CTPROTO_ENDPOINT');
    expect(window.config).to.have.property('CTPROTO_TOKEN');
  });
});
