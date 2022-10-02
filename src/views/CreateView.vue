<script>
import { apiProducts } from "../services/apiProducts.js";

export default {
  name: "CreateView",
  data() {
    return {
      form: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  methods: {
    async createProduct() {
      const response = await apiProducts.createProduct(this.form);
      console.log(response);
    },
  },
};
</script>

<template>
  <main></main>
</template>

<style scoped>
@import "../assets/base.css";

main {
  height: 63vh;
}
</style>
