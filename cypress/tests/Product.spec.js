import Vue from 'vue';
import { mount } from '@cypress/vue';
import Product from '../../src/components/Product';

describe('Product.vue', () => {
  beforeEach(() => {
    window.eventBus = new Vue();
  });

  it('should render the product image', () => {
    mount(Product);
    cy.get('[data-cy="product-picture"]')
      .find('img')
      .should('exist');
  });

  it('should show product details on tab change', () => {
    mount(Product);
    cy.get('.tabs')
      .contains('Details')
      .click();
    cy.get('[data-cy="product-details-item"]').should('exist');
  });

  it('should show correct product details length', () => {
    mount(Product, {
      data() {
        return { details: ['80% cotton', '20% polyester'] };
      },
    });
    cy.get('.tabs')
      .contains('Details')
      .click();
    cy.get('[data-cy="product-details-item"]').should('have.length', 2);
  });

  it('should change image if a different color type is hovered', () => {
    mount(Product).then(() => {
      const component = Cypress.vueWrapper.vm;
      const beforeSrc = Cypress.$('[data-cy="product-picture"] img').attr(
        'src',
      );
      const currentVariant = component.$data.selectedVariant;
      const changedVariantColor = component.$data.variants.find(
        (_, index) => index !== currentVariant,
      ).variantColor;

      cy.get(
        `.color-box[style="background-color: ${changedVariantColor};"]`,
      ).trigger('mouseover');
      cy.get('[data-cy="product-picture"] img')
        .invoke('attr', 'src')
        .should('not.equal', beforeSrc);
    });
  });

  it('should disabled add to cart button if the stock is empty', () => {
    mount(Product, {
      data() {
        return {
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage:
                'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
              variantQuantity: 0,
            },
          ],
        };
      },
    });

    cy.get('[data-cy="add-to-cart"]').should('have.attr', 'disabled');
  });
});
