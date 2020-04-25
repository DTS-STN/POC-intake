// index page.

describe('open to the Index page', function() {
  beforeEach(function() {
    cy.visit('/en')
  })

  it('Loads the index page in english', () => {
    // Test the page at initial load
    cy.url().should('include', '/en')

})
})



