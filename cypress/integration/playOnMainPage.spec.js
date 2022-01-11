describe('page: MainPage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  });

  it('should load correctly', () => {
    cy.get('#Heading').contains('Companies').should('be.visible');
    cy.get('#Companies-list').should('be.visible');
  });

  const validKeyword = 'Co';
  it(`should show search results containing a string (${validKeyword}) that exists in the data`, () => {
    cy.get('#Companies-list').should('be.visible');
    cy.get('#Search-name').type(validKeyword);
    cy.get('#Company-summary-name')
      .each(companyName => {
        expect(companyName).to.contain(validKeyword);
      });
  });

  const invalidKeyword = 'ZzYyXx';
  it(`should show search results containing a keyword (${invalidKeyword}) that does not exist in the data`, () => {
    cy.get('#Companies-list').should('be.visible');
    cy.get('#Search-name').type(invalidKeyword);
    cy.get('#Companies-list').contains('No Relevant Record Found').should('be.visible');
  });
  
  it('Should show some results, on checking all 4 checkboxes', () => {
    cy.get('input[type="checkbox"]')
    .as('boxes')
    .check();
    cy.get('@boxes')
    .each(box => {
      expect(box[0].checked).to.equal(true)
    });
    cy.get('#Specialty-tags').children().should('have.length', 4);
  });
});
