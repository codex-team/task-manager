describe('Sample test', function () {
  it('Check backend entry page', function () {
    cy.request('http://localhost:3000/api')
      .its('body')
      .should('have.length.above', 0);
  });
});
