describe('Browser', function () {
  it('should open index page', function () {
    cy.visit('/');
  });

  it('should load env vars script', async function () {
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
