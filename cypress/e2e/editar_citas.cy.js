/// <reference types="cypress"/>

describe('Llena los campos para una nueva cita y la edita', () => {
    it('Campos nueva cita', () => {
        cy.visit('http://127.0.0.1:5500/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Mili')

        cy.get('[data-cy=propietario-input]')
            .type('Valeria')

        cy.get('[data-cy=telefono-input]')
            .type('39292749')

        cy.get('[data-cy=fecha-input]')
            .type('2024-05-06')

        cy.get('[data-cy=hora-input]')
            .type('10:30')

        cy.get('[data-cy=sintomas-textarea]')
            .type('Solo come y duerme.')

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal','Administra tus Citas');

            // Seleccionar la alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    });

    // Edita los campos
    it('Edita la cita', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Agrega una nueva cita, si no hay citas no puedes
    // editar nada T.T
    cy.get('[data-cy=mascota-input]')
        .type('Mili')

    cy.get('[data-cy=propietario-input]')
        .type('Valeria')

    cy.get('[data-cy=telefono-input]')
        .type('39292749')

    cy.get('[data-cy=fecha-input]')
        .type('2024-05-06')

    cy.get('[data-cy=hora-input]')
        .type('10:30')

    cy.get('[data-cy=sintomas-textarea]')
        .type('Solo come y duerme.')

    cy.get('[data-cy=submit-cita]')
        .click();

    cy.get('[data-cy="btn-editar"]')
        .click()

    cy.get('[data-cy=mascota-input]')
        .clear()
        .type('Nueva Mascota')

    cy.get('[data-cy=submit-cita]')
        .click()

    cy.get('[data-cy=alerta]')
        .invoke('text')
        .should('equal', 'Guardado Correctamente');
})
});