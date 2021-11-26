describe('Sample test', function () {
  it('Request', function () {
    cy.request('http://localhost:3030/')
      .its('body')
      .should('have.length.above', 0);
  });
});
