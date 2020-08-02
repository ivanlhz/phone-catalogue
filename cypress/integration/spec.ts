describe('Phone Catalogue', () => {
  it('shows homepage and go to the first phone link', function () {
    cy.visit('http://localhost:3000');
    cy.get('[role="spinbutton"]')
    cy.wait(4000)
    cy.get('[href="/phones/0"]').click(); 
    cy.get('ul > :nth-child(2)').should('contain', 'A10 Fusion')
  })
})
