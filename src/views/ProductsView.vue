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
      NUM_RESULTS: 6,
      pag: 1,
    };
  },

  methods: {
    async listProducts() {
      this.products = await apiProducts.list();
    },

    async listCategories() {
      this.categories = await apiCategories.list();

      categories.initialState(this.categories, this.categoriesState);
    },

    async filterCategories() {
      this.products = await apiProducts.list();

      const checkedCategories = categories.checkbox(this.categoriesState);

      this.products = categories.filter(this.products, checkedCategories);
    },

    filterProducts() {
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
  <!-- search section -->
  <section id="searchSection" class="mt-4 mb-2 text-center">
    <input
      type="text"
      v-on:focus="filterProducts"
      v-model="input"
      placeholder="🔍"
    />

    <div>
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

  <!-- main section -->
  <main>
    <!-- categories section -->
    <div
      id="categoriesSection"
      class="d-flex flex-column justify-content-around align-items-center mt-3"
    >
      <a v-on:click="listProducts"><h1 class="fs-4">ALL PRODUCTS</h1></a>

      <form id="form" @submit.prevent="filterCategories">
        <legend>Choose one or more categories:</legend>

        <div v-for="(categorie, index) in categoriesState" :key="index">
          <input
            type="checkbox"
            value="{{ categorie.name }}"
            v-model="categorie.checked"
            v-bind:index="categorie.index"
          />
          <label class="fs-6">{{ categorie.name }}</label>
          <br />
        </div>

        <div class="text-center mt-2">
          <input id="submit" type="submit" value="Filter" />
        </div>
      </form>

      <router-link to="/create"
        ><h2 class="fs-6 mt-4">ADD NEW PRODUCT</h2></router-link
      >
    </div>

    <!-- pagination section -->
    <section
      id="totalPagination"
      class="d-flex flex-column justify-content-around align-items-center border"
    >
      <!-- products section -->
      <div id="productsSection">
        <div
          class="m-auto mt-3 ml-3 mr-3 mb-4"
          v-for="(product, index) in products"
          :key="index"
          v-show="(pag - 1) * NUM_RESULTS <= index && pag * NUM_RESULTS > index"
        >
          <TheCard :src="product.img" :product="product" />
        </div>
      </div>

      <nav aria-label="Page navigation" class="text-center">
        <ul class="text-center">
          <li>
            <a
              href="#"
              aria-label="Previous"
              v-show="pag != 1"
              @click.prevent="pag -= 1"
            >
              <span class="fs-5" aria-hidden="true">Back</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Next"
              v-show="(pag * NUM_RESULTS) / products.length < 1"
              @click.prevent="pag += 1"
            >
              <span class="fs-5" aria-hidden="true">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

/* search section done */
#searchSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10vw;
  margin: auto;
  align-items: center;
  background-color: var(--beige-palette);
}
#searchSection input {
  width: 18vw;
  height: 4vh;
  padding: 1vw 1vh;
  outline: none;
}
#searchSection p {
  border-bottom: 0.1vw solid rgb(106, 82, 41);
  color: rgb(106, 82, 41);
  font-weight: bold;
  text-transform: capitalize;
}

/* main done */
main {
  display: flex;
  justify-content: space-around;
  align-items: start;
  width: 100vw;
  padding-left: 2vw;
  padding-right: 2vw;
}

/* categories section done */
#categoriesSection {
  width: 25vw;
  border: 0.1vw solid black;
}
h1 {
  cursor: pointer;
  margin-bottom: 2vh;
}
h1:hover {
  color: var(--green-palette);
  text-decoration: underline;
}
form legend {
  font-size: 1.5vw;
  margin-bottom: 1vh;
}
form label {
  margin-left: 0.5vw;
}
form input {
  cursor: pointer;
}
form input:checked {
  background-color: var(--green-palette);
}
form #submit {
  padding: 0.3vh 0.6vw;
  color: white;
  background-color: var(--green-palette);
  transition: all 0.2s ease-in;
  border: none;
  border-radius: 0.2vw;
  transition: all 0.2s ease-in;
}
form #submit:hover {
  color: white;
  background-color: var(--green-palette);
  box-shadow: 0 0.2vw 0.4vw var(--green-palette);
  letter-spacing: 0.1vw;
}
form h2 {
  cursor: pointer;
  text-align: left;
}
h2:hover {
  color: var(--green-palette);
  text-decoration: underline;
}

/* pagination section */
#totalPagination {
  width: 57vw;
}

/* products section */
#productsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 55vw;
  margin-bottom: 1vh;
}
nav {
  width: 20vw;
  margin-bottom: 4vh;
}
nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}
nav a {
  margin: 1vw;
  letter-spacing: 0.1vw;
}
nav a:hover {
  color: var(--green-palette);
}

/* media queries */
@media (max-width: 1200px) {
  #totalPagination {
    width: 62vw;
  }
}

@media (max-width: 1000px) {
  #totalPagination {
    width: 70vw;
  }
  #categoriesSection {
    width: 20vw;
  }
  #productsSection {
    width: 62vw;
  }
  form legend {
    font-size: 1.3vw;
  }
  form label {
    font-size: 1.4vw !important;
  }
}
@media (max-width: 850px) {
  h1 {
    font-size: 2.5vw !important;
  }
  h2 {
    font-size: 1.8vw !important;
  }
}
@media (max-width: 650px) {
  #categoriesSection {
    width: 23vw;
  }
  #totalPagination {
    width: 60vw;
  }
  #productsSection {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 550px) {
  #categoriesSection {
    width: 27vw;
  }
  #totalPagination {
    width: 50vw;
  }
  #productsSection {
    width: 75vw;
    grid-template-columns: repeat(1, 1fr);
  }
  h1 {
    font-size: 2.9vw !important;
  }
  h2 {
    font-size: 2.2vw !important;
  }
  form legend {
    font-size: 2vw;
  }
  form label {
    font-size: 2.1vw !important;
  }
}
</style>
