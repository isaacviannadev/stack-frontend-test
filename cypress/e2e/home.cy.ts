describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display the search bar', () => {
    cy.get('input[placeholder="Buscar Produtos"]').should('be.visible');
  });

  it('should display the product list', () => {
    cy.get('.MuiGrid-container').should('be.visible');
    cy.get('.MuiGrid-item').should('have.length.greaterThan', 0);
  });

  it('should fetch initial search for products without searchTerm', () => {
    const searchTerm = '';
    cy.get('input[placeholder="Buscar Produtos"]').type(`${searchTerm}{enter}`);
    cy.get('.MuiGrid-container').should('be.visible');
    cy.get('.MuiGrid-item').should('have.length.greaterThan', 0);
  });

  it('should search for products', () => {
    const searchTerm = 'cap';
    cy.get('input[placeholder="Buscar Produtos"]').type(`${searchTerm}{enter}`);
    cy.get('.MuiGrid-container').should('be.visible');
    cy.get('.MuiGrid-item').should('have.length.greaterThan', 0);
    cy.get('.MuiGrid-item').each(($el) => {
      cy.wrap($el).contains(searchTerm, { matchCase: false });
    });
  });

  it('should open and close the cart drawer', () => {
    // Verifique se o drawer do carrinho pode ser aberto e fechado
    cy.get('button[aria-label="cart-button"]').click();
    cy.get('.MuiDrawer-paper').should('be.visible');
    cy.get('button[aria-label="close-cart"]').click();
    cy.get('.MuiDrawer-paper').should('not.exist');
  });
});
