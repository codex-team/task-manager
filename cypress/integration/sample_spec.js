describe('Sample test', function () {
  it('Request', function () {
    cy.request('http://localhost:3000/api')
      .its('body')
      .should('have.length.above', 0);
  });
});
