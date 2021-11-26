describe('Sample test', function () {
  it('Request', function () {
    cy.request('http://0.0.0.0:3000/')
      .its('body')
      .should('have.length.above', 0);
  });
});
