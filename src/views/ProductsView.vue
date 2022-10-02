<script>
import { apiProducts } from "../services/apiProducts.js";
import { apiCategories } from "../services/apiCategories.js";
import { categories } from "../services/categoriesFunctions.js";
import TheCard from "../components/TheCard.vue";

export default {
  name: "ProductsView",

  data() {
    return {
      input: "",
      products: [],
      categories: [],
      categoriesState: [],
      NUM_RESULTS: 4,
      pag: 1,
    };
  },

  methods: {
    async listProducts() {
      const response = await apiProducts.list();

      const productsData = response.data;

      this.products = productsData;
    },

    async listCategories() {
      const data = await apiCategories.list();

      const categoriesData = data.data;

      this.categories = categoriesData;

      categories.initialState(this.categories, this.categoriesState);
    },

    async filterCategories() {
      await this.listProducts();

      const checkedCategories = await categories.checkbox(this.categoriesState);

      this.products = await categories.filter(this.products, checkedCategories);
    },

    filterProducts() {
      if (this.input.length > 0) {
        this.focus = true;
      }

      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },

  created() {
    this.listProducts();
    this.listCategories();
  },

  components: { TheCard },
};
</script>

<template>
  <section id="search" class="mt-5 text-center">
    <input
      type="text"
      v-on:focus="filterProducts"
      v-model="input"
      placeholder="Search products..."
    />

    <div class="results">
      <div v-for="(product, index) in filterProducts()" :key="index">
        <router-link :to="{ path: '/detail' }">
          <p v-if="this.input.length > 0">
            {{ product.name }}
          </p>
        </router-link>
      </div>
      <div v-if="input && !filterProducts().length">
        <p>No results found!</p>
      </div>
    </div>
  </section>

  <main class="d-flex justify-content-around align-items-start">
    <div
      id="categoriesSection"
      class="d-flex flex-column justify-content-around align-items-center"
    >
      <a v-on:click="listProducts"><h1>ALL PRODUCTS</h1></a>

      <form @submit.prevent="filterCategories">
        <legend>Choose one or more categories:</legend>

        <div v-for="(categorie, index) in categoriesState" :key="index">
          <input
            type="checkbox"
            value="{{ categorie.name }}"
            v-model="categorie.checked"
            v-bind:index="categorie.index"
          />
          <label>{{ categorie.name }}</label>
          <br />
        </div>

        <div class="text-center">
          <button type="submit">Filtrar</button>
        </div>
      </form>

      <router-link to="/create"><h2>*Add new product</h2></router-link>
    </div>
    <!--  -->

    <!-- Results -->
    <section
      id="totalPagination"
      class="d-flex flex-column justify-content-around align-items-center"
    >
      <div id="productsSection">
        <div
          class="m-auto mt-3 ml-3 mr-3 mb-3"
          v-for="(product, index) in products"
          :key="index"
          v-show="(pag - 1) * NUM_RESULTS <= index && pag * NUM_RESULTS > index"
        >
          <TheCard :src="product.img" :product="product" />
        </div>
      </div>

      <!-- Controls -->
      <nav aria-label="Page navigation" class="text-center">
        <ul class="pagination text-center">
          <li>
            <a
              class="controls"
              href="#"
              aria-label="Previous"
              v-show="pag != 1"
              @click.prevent="pag -= 1"
            >
              <span aria-hidden="true">Back</span>
            </a>
          </li>
          <li>
            <a
              class="controls"
              href="#"
              aria-label="Next"
              v-show="(pag * NUM_RESULTS) / products.length < 1"
              @click.prevent="pag += 1"
            >
              <span aria-hidden="true">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

#search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin: auto;
  align-items: center;
}
#search .results {
}

main {
  padding-left: 120px;
  padding-top: 50px;
}
/* categories section */
#categoriesSection {
  width: 20%;
  border: 1px solid black;
}

h1 {
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 18px;
}
form legend {
  margin-bottom: 8px;
  font-size: 15px;
}
form label {
  cursor: pointer;
  margin-left: 6px;
  font-size: 16px;
}
form input {
  cursor: pointer;
}
form button {
  margin-top: 13px;
  padding: 2px 5px;
  color: white;
  background-color: var(--green-palette);
  border: none;
  border-radius: 5px;
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
/*  */
#totalPagination {
  width: 80%;
}
#productsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  margin-bottom: 35px;
}

nav {
  width: 60%;
  margin-bottom: 25px;
}
.pagination {
  display: flex;
  justify-content: center;
}
.controls {
  width: 30%;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 20px;
}
.controls:hover {
  color: var(--green-palette);
}
</style>
