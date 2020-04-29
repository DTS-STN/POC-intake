// form page.

describe('open to the form page', function() {
    beforeEach(function() {
      cy.visit('/en')
    })

    it('Loads the form page when the get started button is clicked', () => {
      // Test the page changes when the start button is clicked.
      cy.get('[data-cy=start-button]').should('be.visible')
      cy.get('[data-cy=start-button]').click()
      cy.url().should('include', '/en/InsertPocPage')

  })
  })
  describe('open to the form page', function() {
    beforeEach(function() {
      cy.visit('/en/InsertPocPage')
    })
    it('Form elements are shown on the page', () => {
        // Test the page changes when the start button is clicked.
        cy.get('[data-cy=form-title]').should('be.visible')
        cy.get('[data-cy=fn-title]').should('be.visible')
        cy.get('[data-cy=ln-title]').should('be.visible')
        cy.get('[data-cy=email-title]').should('be.visible')
        cy.get('[data-cy=message-title]').should('be.visible')
        cy.get('[data-cy=submit-button]').should('be.visible')

    })
    it('error messages are shown on the page is no text is entered into the field', () => {
        // first name
        cy.get('[data-cy=fn-text-entry]').should('be.visible')
         //last name
         cy.get('[data-cy=ln-text-entry]').should('be.visible')
          // email
        cy.get('[data-cy=email-entry]').should('be.visible')
          // message
         cy.get('[data-cy=message-entry]').should('be.visible')
          // click the submit button
        cy.get('[data-cy=submit-button]').click()
        // check for the error text
        cy.get('[data-cy=fn-error] > span').should('be.visible')
        cy.get('[data-cy=ln-error] > span').should('be.visible')
        cy.get('[data-cy=email-error]').should('be.visible')
        cy.get('[data-cy=message-error] > span').should('be.visible')

    })



})
