describe('Test home page', function() {
    it('Home page renders correctly', function(){
        cy.visit('http://localhost:3000/');
        cy.get('.dgp-home-page')
        cy.get('.MuiTypography-paragraph').contains('Everything is fine')
        cy.contains('Here what we have for you')
        cy.get('a')
        cy.get('button')
    })
    it('Click on the Button "Play on sandbox should navigate to .../sandbox"', function(){
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.url().should('include','http://localhost:3000/sandbox')
    })
})