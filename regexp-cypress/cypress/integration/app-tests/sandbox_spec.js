describe('Test sandbox', function() {
  const getIframeDocument = () => {
    return cy
    .get('iframe[data-cy="iframe"]')
    .its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }
  
  it('gets the post', () => {
    cy.visit('http://localhost:3000/sandbox');
    cy.get(':nth-child(1) > .react-codemirror2 > .CodeMirror > .CodeMirror-scroll').type('<h1>Hello World</h1>')
    cy.wait(1000)
    getIframeBody().contains('Hello World')
  })
})