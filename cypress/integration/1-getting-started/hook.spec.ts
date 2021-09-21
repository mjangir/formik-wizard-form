it('Test <FormikWizard /> component', () => {
  cy.visit('http://localhost:3000/hook-example');

  cy.findByText('Next').click();

  cy.findByText('Personal Details').should('exist');
  cy.findByText('First name is required').should('exist');
  cy.findByText('Username is required').should('exist');
  cy.findByText('Password is required').should('exist');

  cy.get('input[name=firstName]').type('Manish');
  cy.get('input[name=username]').type('mjangir');
  cy.get('input[name=password]').type('1234');

  cy.findByText('Next').click();

  cy.findByText('Contact Details').should('exist');

  cy.findByText('Next').click();

  cy.findByText('Email is required').should('exist');
  cy.findByText('Phone number is required').should('exist');

  cy.get('input[name=email]').type('admin@admin.com');
  cy.get('input[name=phone]').type('1234567890');
  cy.get('input[name=addressLine1]').type('Pune');
  cy.get('input[name=addressLine2]').type('India');

  cy.findByText('Next').click();

  cy.findByText('Job Details').should('exist');

  cy.findByText('Next').should('not.exist');
  cy.findByText('Finish').should('exist');
  cy.findByText('Finish').click();

  cy.findByText('Designation is required').should('exist');

  cy.get('input[name=employerName]').type('Google');
  cy.get('input[name=designation]').type('Senior Software Engineer');
  cy.get('input[name=totalExperience]').type('10');
  cy.get('input[name=city]').type('Washington DC');

  cy.findByText('Finish').click();
  cy.get('pre').contains('Manish');
  cy.get('pre').contains('admin@admin.com');
  cy.get('pre').contains('Senior Software Engineer');
});
