<script>
import { mapState } from "pinia";
import { cartStore } from "../stores/cartStore.js";
import TheCard from "../components/TheCard.vue";

export default {
  name: "CartView",

  data() {
    return {
      NUM_RESULTS: 6,
      pag: 1,
    };
  },

  computed: {
    ...mapState(cartStore, ["products"]),
  },

  methods: {
    alert() {
      alert("This funcionality is in production...");
    },
  },

  components: { TheCard },
};
</script>

<template>
  <main>
    <!-- pagination section -->
    <section
      id="totalPagination"
      class="d-flex flex-column justify-content-around align-items-center"
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

    <button v-on:click="alert">CHECKOUT!</button>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

main {
  min-height: 60vh;
}

/* pagination section */
#totalPagination {
  margin: 30px auto;
  width: 70vw;
  min-height: 50vh;
}

/* products section */
#productsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 65vw;
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

button {
  display: block;
  margin: 20px auto;
  background-color: green;
  color: white;
  padding: 3px 5px;
  border: none;
}
</style>
