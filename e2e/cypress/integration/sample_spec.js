describe('Sample test', function () {
  it('Check frontend entry page', function () {
    cy.request('/')
      .its('body')
      .should('have.length.above', 0);
  });
});
