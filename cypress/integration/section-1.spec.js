
describe('Problem 1', () => {

    before(function(){
    cy.fixture('example').then(function(data)
    {
      this.data=data
    })
    })
  
it('Welcome to AlayaCare!', function(){

  cy.visit("http://localhost:8080/section-1");
  cy.get('.question-element-container').find('#alaya-table').should('not.be.visible')
  cy.get('button[data-test=table-toggle-button]').click()
  cy.wait(4000)
  cy.get('.col-xs-12').find('#table-toggle-button').should('be.visible')
  cy.get('#alaya-table').find('tr').its('length').should('eq', 11)
  cy.get('#alaya-table').find('tr[class=table-header] th').its('length').should('eq', 5)

  //Form Assertions
  cy.get('.question-element-container').find('#alaya-form').should('not.be.visible')
  cy.get('button[data-test=form-toggle-button]').click()
  cy.wait(4000)
  cy.get('.col-xs-12').find('#form-toggle-button').should('be.visible')
  cy.get('#fullName').type(this.data.name)
  cy.get('#fullName').should('have.value','manpreet')
  cy.get('#age').type(this.data.age)
  cy.get('#age').should('have.value','30')
  cy.get('select').select('female').should('have.value','female')
  cy.get('#nurse').check().should('be.checked')
  cy.get('#submit').click()
  //Window Alert
  cy.on('windw.alert', (str)=>
  {
  expect(str).to.equal('Form Submitted!')
})


})
})
