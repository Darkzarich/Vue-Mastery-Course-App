import { mount } from '@cypress/vue';
import App from '../../src/App';

describe('HelloWorld', () => {
  it('renders initial cart zero', () => {
    mount(App);
    cy.get('.cart').should('have.text', 'Cart (0)');
  });
});
