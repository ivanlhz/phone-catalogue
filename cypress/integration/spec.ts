describe('Home', () => {
  it('shows homepage and go to the first phone link', function () {
    cy.visit('http://localhost:3000');
    cy.get('[href="/phones/0"] > .block > h3').click(); 
    cy.get('ul > :nth-child(2)').should('contain', 'A10 Fusion')
  })
})
