import Vue from 'vue';
import { mount } from '@cypress/vue';
import App from '../../src/App';

describe('App.vue', () => {
  beforeEach(() => {
    window.eventBus = new Vue();
    mount(App);
  });

  it('should render initial cart zero', () => {
    cy.get('.cart').should('have.text', 'Cart (0)');
  });

  it('should add socks to cart after click on "Add to cart"', () => {
    cy.get('[data-cy="add-to-cart"]').click();
    cy.get('.cart').should('have.text', 'Cart (1)');
  });

  it('should show review form after click on "Make a Review"', () => {
    cy.get('.tabs').contains('Make a Review').click();
    cy.get('[data-cy="review-form"]').should('exist');
  });
});
