<template>
  <div>
    <ul>
      <span
        class="tabs"
        :class="{ activeTab: selectedTab === tab }"
        v-for="tab in tabs"
        @click="selectedTab = tab"
        :key="tab"
        >{{ tab }}</span
      >
    </ul>

    <div v-show="selectedTab === 'Shipping'">
      <p>{{ shipping }}</p>
    </div>

    <div v-show="selectedTab === 'Details'">
      <ul>
        <li
          v-for="(detail, index) in details"
          :key="index"
          data-cy="product-details-item"
        >
          {{ detail }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoTabs',
  data() {
    return {
      tabs: ['Shipping', 'Details'],
      selectedTab: 'Shipping',
    };
  },
  props: {
    shipping: {
      required: true,
    },
    details: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
