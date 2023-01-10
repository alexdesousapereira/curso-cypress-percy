describe('Ticketbox', () => {

  beforeEach(() => 
    cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html')
    )

  const initial_state = 'Checks for the initial state'
  it(initial_state, () => {
    cy.vrt(initial_state)
  })

  const invalid_email = 'Checks for invalid email'
  it(invalid_email , () => {
    cy.get('#email').type('wilwilwil-example.com')
    cy.vrt(invalid_email)
  })

  const enables_submittion = 'Enables submittion after all mandatory fields are filled'
  it(enables_submittion, () => {
    cy.fillMandatoryFields()
    cy.vrt(enables_submittion)
  })

  const updates_agreement = 'Updates agreement based on full name, tickets quantity, and type'
  it(updates_agreement, () => {
    cy.get('#first-name').type('Heron')
    cy.get('#last-name').type('Borgues')
    cy.get("#ticket-quantity").select("4")
    cy.get("#vip").check()
    cy.vrt(updates_agreement)
  })

  const successfulFormSubmission = 'Shows a success message after form submission'
  it(successfulFormSubmission, () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.vrt(successfulFormSubmission)
  })
})