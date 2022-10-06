<script>
import { storage } from "../services/storage.js";

export default {
  name: "CartView",

  data() {
    return {
      products: [],
    };
  },

  methods: {
    listProducts() {
      this.products = storage.listItems();
    },
  },

  created() {
    this.listProducts();
  },
};
</script>

<template>
  <div v-for="(product, index) in products" :key="index">
    {{ product.name }}
  </div>
</template>

<style></style>
