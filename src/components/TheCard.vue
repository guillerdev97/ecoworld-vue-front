<script>
import { apiProducts } from "../services/apiProducts";
import EditModal from "../components/modals/EditModal.vue";
import { cartStore } from "../stores/cartStore.js";
import { mapActions } from "pinia";

export default {
  name: "TheCard",

  data() {
    return {
      productId: this.product.id,
    };
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },

  methods: {
    async deleteProduct() {
      const doYouWant = confirm("Do you want to delete this product?");

      if (doYouWant === true) {
        await apiProducts.delete(this.productId);

        alert(`This product... "${this.product.name}"" has been deleted`);

        location.reload();

        return;
      }

      return;
    },

    editProduct() {
      const productId = this.product.id;

      this.$router.push({
        name: "edit",
        params: {
          id: productId,
        },
      });
    },

    ...mapActions(cartStore, ["addProduct"]),
  },

  components: { EditModal },
};
</script>

<template>
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

      <div class="d-flex justify-content-between align-items-center w-100 mt-2">
        <button v-on:click="addProduct(product)" type="button" class="btn">
          Add to cart
        </button>
        <a v-on:click="deleteProduct">❌</a>
        <a><EditModal :product="product" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";

/* card done */
.card {
  width: 15vw;
  height: 38vh;
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
