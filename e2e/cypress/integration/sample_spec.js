describe('Sample test', function () {
  it('Check backend entry page', function () {
    cy.request('/apiw')
      .its('body')
      .should('have.length.above', 0);
  });
});
