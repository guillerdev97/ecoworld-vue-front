<script>
import { apiProducts } from "../services/apiProducts.js";
import { cartStore } from "../stores/cartStore.js";
import { mapActions } from "pinia";

export default {
  name: "DetailView",

  data() {
    return {
      products: [],
      product: {},
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  methods: {
    async listProducts() {
      this.products = await apiProducts.list();

      this.products.forEach((product) => {
        if (this.name == product.name) {
          this.product = product;
        }
      });
    },

    ...mapActions(cartStore, ["addProduct"]),
  },

  created() {
    this.listProducts();
  },
};
</script>

<template>
  <main class="d-flex justify-content-center align-items-center w-100">
    <!-- card -->
    <div class="card">
      <img :src="product.img" class="card-img-top h-50" alt="product image" />

      <!-- card body -->
      <div
        class="card-body h-50 d-flex flex-column justify-content-around align-items-start"
      >
        <h5 class="card-title fs-4 fw-bold">{{ product.name }}</h5>

        <p class="card-text">
          {{ product.category }}
        </p>

        <p class="card-text">{{ product.price }}€</p>

        <p class="card-text">{{ product.description }}</p>

        <div
          class="d-flex justify-content-center align-items-center w-100 mt-2"
        >
          <button v-on:click="addProduct(product)" type="button" class="btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

/* card done */
.card {
  width: 25vw;
  height: 60vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  border: 0.1vw solid #c8a65cd1;
}
.card:hover {
  box-shadow: 0 0 0.5vw #c8a65cd1;
}

/* card body done */
.card-body {
  background-color: var(--brown-palette);
}
.card-title {
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
}
.card-text {
  font-size: 1vw;
  text-transform: capitalize;
  color: white;
  margin-left: 0.6vw;
}
.btn {
  padding: 0.3vh 0.6vw;
  font-size: 1vw;
  background-color: #c4af78;
  border: 0.1vw solid white;
  color: white;
  transition: all 0.2s ease-in;
}
.btn:hover {
  cursor: pointer;
  color: white;
  background-color: #c3a24f;
}
a:hover {
  cursor: pointer;
  font-size: 1.2vw;
}

/* media queries */
@media (max-width: 1200px) {
  .card {
    width: 16vw;
    height: 34vh;
  }
}

@media (max-width: 1000px) {
  .card {
    width: 19vw;
    height: 30vh;
  }
}

@media (max-width: 850px) {
  .card {
    height: 27vh;
  }
}
@media (max-width: 650px) {
  .card {
    height: 20vh;
  }
}
@media (max-width: 550px) {
  .card {
    width: 30vw;
    height: 23vh;
  }
}
</style>
