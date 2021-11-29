describe('Sample test', function () {
  it('Check backend entry page', function () {
    cy.request('/apiy')
      .its('body')
      .should('have.length.above', 0);
  });
});
