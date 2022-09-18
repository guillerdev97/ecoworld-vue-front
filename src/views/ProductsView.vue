<script>
import TheCard from "../components/TheCard.vue";
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
  components: { TheCard },
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

      <router-link to="/create"><h1>Add new product</h1></router-link>
    </div>

    <div id="productsSection">
      <div v-for="product in products" :key="product">
        <TheCard :product="product" />
      </div>
    </div>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50%;
  min-height: 500px;
  border: 1px solid black;
}
</style>
