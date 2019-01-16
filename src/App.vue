<template>
  <div>
    <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart({{ cart.length }})</p>
    </div>
    <product :premium="premium" @add-to-cart="updateCart"></product>
  </div>
</template>

<script>
import Product from './components/Product';

export default {
  name: 'App',
  components: {
    Product,
  },
  data() {
    return {
      premium: true,
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
};
</script>

<style>
  body {
    font-family: tahoma, serif;
    color:#282828;
    margin: 0;
  }

  .nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 60px;
    margin-bottom: 15px;
  }

  .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
  }
</style>
