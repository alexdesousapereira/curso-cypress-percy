
/* Creating a custom command called `vrt` that will start the visual regression test, track the title,
and stop the visual regression test. */
Cypress.Commands.add('vrt', title => {
  cy.vrtStart()
  cy.vrtTrack(title)
  cy.vrtStop()
})

/* Creating a custom command called `fillMandatoryFields` that will fill in the mandatory fields on the
form. */
Cypress.Commands.add('fillMandatoryFields', () => {
  cy.get('#first-name').type('Júlio');
  cy.get('#last-name').type('Zeferino');
  cy.get('#email').type('julio.zeferino@gmail.com');
  cy.get('#agree').check();
});

/* Creating a custom command called `fillMandatoryFieldsAndSubmit` that will fill in the mandatory
fields on the form and then click the Confirm Tickets button. */
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.fillMandatoryFields();
  cy.contains('Confirm Tickets').click();
});