<template>
  <div class="product">

    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ product }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <info-tabs :shipping="shipping" :details="details"></info-tabs>

      <div class="color-box"
           v-for="(variant, index) in variants"
           :key="variant.variantId"
           :style="{ backgroundColor: variant.variantColor }"
           @mouseover="updateProduct(index)"
      >
      </div>

      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
      >
        Add to cart
      </button>

    </div>

    <product-tabs :reviews="reviews"></product-tabs>

  </div>
</template>

<script>
import InfoTabs from './InfoTabs';
import ProductTabs from './ProductTabs';

export default {
  name: 'Product',
  components: {
    InfoTabs,
    ProductTabs,
  },
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0',
          variantQuantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99;
    },
  },
  mounted() {
    window.eventBus.$on('review-submitted', (productReview) => {
      this.reviews.push(productReview);
    });
  },
};
</script>

<style scoped>
  .product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0 .5px 1px #d8d8d8;
  }

  .product-image {
    width: 80%;
  }

  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
  }

  .color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }

  button {
    margin-top: 30px;
    border: none;
    background-color: #1E95EA;
    color: white;
    height: 40px;
    width: 100px;
    font-size: 14px;
  }

  .disabledButton {
    background-color: #d8d8d8;
  }
</style>
