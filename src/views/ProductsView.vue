<script>
export default {
  name: "ProductsView",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getAllProducts() {
      const products = await this.$http.get(
        "http://localhost:8080/api/v1/products"
      );
      const productsData = products.data;
      this.products = productsData;
      console.log(this.products);
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>

<template>
  <main class="d-flex justify-content-around align-items-start">
    <div
      id="categoriesSection"
      class="d-flex flex-column justify-content-around align-items-center"
    >
      <h1>PRODUCTS</h1>

      <ul>
        <li>Cereales en grano</li>
        <li>Frutas</li>
        <li>Hortalizas</li>
        <li>Carnes</li>
        <li>Pescados</li>
      </ul>
    </div>

    <div id="productsSection"></div>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

#categoriesSection {
  width: 25%;
  padding: 5px 10px;
  border: 1px solid black;
}
h1 {
  font-size: 24px;
  text-align: left;
}
ul {
  list-style-type: none;
}
#productsSection {
  width: 50%;
  min-height: 500px;
  border: 1px solid black;
}
</style>
