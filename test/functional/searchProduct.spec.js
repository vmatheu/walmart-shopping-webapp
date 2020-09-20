const VISIT_URL = 'http://localhost:3002';

describe('App Functinal', () => {
  it('should be render search input component"', () => {
    cy.visit(VISIT_URL);
    cy.get('input[id^="inputSearchId"]').should('exist');
  });

  it('should be product discount element when search is palindrome"', () => {
    cy.visit(VISIT_URL);
    cy.get('input[id^="inputSearchId"]').type(181);
    cy.get('.card-header').should('exist');
    cy.get('.card-body').should('exist');
    cy.get('.card-header').should('exist');
    cy.get('.pricing-card-title').should('exist');
    cy.get('.walmark-product-card-discount').should('exist');
  });

  it('should be product without discount element when search is not palindrome"', () => {
    cy.visit(VISIT_URL);
    cy.get('input[id^="inputSearchId"]').type(12);
    cy.get('.card-header').should('exist');
    cy.get('.card-body').should('exist');
    cy.get('.card-header').should('exist');
    cy.get('.pricing-card-title').should('exist');
    cy.get('.walmark-product-card-discount').should('not.exist');
  });

  it('should be not render product when input search is not valid"', () => {
    cy.visit(VISIT_URL);
    cy.get('input[id^="inputSearchId"]').type('aa');
    cy.get('.card-header').should('not.exist');
  });
});
