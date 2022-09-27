<script>
import { apiProducts } from "../services/apiProducts.js";
import { apiCategories } from "../services/apiCategories.js";

import TheCard from "../components/TheCard.vue";

export default {
  name: "ProductsView",

  data() {
    return {
      products: [],
      categories: [],
      categoriesStatus: [],
    };
  },

  methods: {
    async getAllProducts() {
      const data = await apiProducts.getAllProducts();

      const productsData = data.data;

      this.products = productsData;
      console.log(this.products);
    },

    async getAllCategories() {
      const data = await apiProducts.getAllCategories();

      const categoriesData = data.data;

      this.categories = categoriesData;
    },

    async filterCategories() {
      const data = await apiCategories.getAllCategories();

      const categoriesData = data.data;

      const categoriesName = [];
      categoriesData.forEach((categorie) => {
        const name = categorie.name;

        categoriesName.push(name);
      });

      categoriesName.forEach((categorie) => {
        const obj = {
          name: categorie,
          status: false,
          checked: false,
        };

        this.categoriesStatus.push(obj);
      });

      console.log(this.categoriesStatus);
    },
  },

  created() {
    this.getAllProducts();
    this.getAllCategories();
    this.filterCategories();
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
      <h1>ALL PRODUCTS</h1>

      <form>
        <legend>Choose one or more categories:</legend>
        <div v-for="(categorie, index) in categories" :key="index">
          <input
            type="checkbox"
            id="{{ categorie.name }}"
            value="{{ categorie.name }}"
            v-model="categorie.checked"
            v-bind:index="categorie.index"
          />
          <label>{{ categorie.name }}</label>
          <br />
        </div>
        <button type="submit">Filtrar</button>
      </form>

      <router-link to="/create"><h2>*Add new product</h2></router-link>
    </div>

    <div id="productsSection">
      <div
        class="m-auto mt-3 ml-3 mr-3 mb-3"
        v-for="(product, index) in products"
        :key="index"
      >
        <TheCard :src="product.img" :product="product" />
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

#categoriesSection {
  width: 15%;
  margin-top: 25px;
}
h1 {
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: left;
  text-decoration: underline;
}

ul {
  list-style-type: none;
}
li {
  cursor: pointer;
  margin-bottom: 5px;
  color: rgb(113, 113, 113);
}
li:hover {
  text-decoration: underline;
}
h2 {
  cursor: pointer;
  margin-top: 15px;
  font-size: 16px;
  text-align: left;
}
h2:hover {
  color: black;
  text-decoration: underline;
}
#productsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  margin-top: 25px;
  margin-bottom: 35px;
  max-height: 700px;
  border: 3px solid #d0b272b6;
  border-radius: 1px;
  overflow-y: scroll;
}
</style>
