<template>
  <div>

    <ul>
          <span class="tabs"
                :class="{ activeTab: selectedTab === tab }"
                v-for="tab in tabs"
                @click="selectedTab = tab"
                :key="tab"
          >{{ tab }}</span>
    </ul>

    <div v-show="selectedTab === 'Reviews'">
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul v-else>
        <li v-for="(review, index) in reviews" :key="index">
          <p>{{ review.name }}</p>
          <p>Rating:{{ review.rating }}</p>
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>

    <div v-show="selectedTab === 'Make a Review'">
      <product-review></product-review>
    </div>

  </div>
</template>

<script>
import ProductReview from './ProductReview';

export default {
  name: 'ProductTabs',
  components: {
    ProductReview,
  },
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews',
    };
  },
  props: {
    reviews: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
  .tabs {
    margin-left: 20px;
    cursor: pointer;
  }

  .activeTab {
    color: #16C0B0;
    text-decoration: underline;
  }
</style>
