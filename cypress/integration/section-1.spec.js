describe('This is my first test suite', function()
{

it('This is my first test case', function(){


cy.visit("https://www.walmart.ca/en");
cy.get('.e1xoeh2i1').type('cofee maker blackdecker')
cy.get('.css-1lxthnz').click()
cy.get('.css-1fnwt3w').should('be.visible')
cy.wait(5000)
cy.get('.css-459x84').find('.css-1fnwt3w').contains('Add to cart').click()

} )
})

