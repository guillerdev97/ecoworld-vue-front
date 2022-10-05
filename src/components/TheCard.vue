<script>
import { apiProducts } from "../services/apiProducts";

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
  },
};
</script>

<template>
  <div class="card">
    <img :src="product.img" class="card-img-top h-50" alt="product image" />

    <div
      class="card-body h-50 d-flex flex-column justify-content-center align-items-start"
    >
      <h5 class="card-title">{{ product.name }}</h5>

      <p class="card-text">
        {{ product.category }}
      </p>

      <p class="card-text">{{ product.price }}€</p>

      <div class="d-flex justify-content-between align-items-center w-100">
        <button type="button" class="btn">Add to cart</button>
        <a v-on:click="deleteProduct">❌</a>
        <router-link
          :to="{
            path: `/edit/${this.productObj}`,
            params: {
              productObj: this.product,
            },
          }"
          ><a>📝</a></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";

/* card */
.card {
  width: 15vw;
  height: 42vh;
  border: 1px solid #c8a65cd1;
}
.card:hover {
  box-shadow: 0 0 5px #c8a65cd1;
}

/* card body */
.card-body {
  background-color: var(--brown-palette);
}
.card-title {
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: white;
  margin-top: -3px;
}
.card-text {
  font-size: 14px;
  text-transform: capitalize;
  color: white;
  margin-left: 6px;
}
.btn {
  margin-top: 3px;
  padding: 3px 6px;
  font-size: 14px;
  background-color: var(--brown-palette);
  border: 1px solid white;
  color: white;
  transition: all 0.2s ease-in;
}
.btn:hover {
  cursor: pointer;
  color: white;
  background-color: #c9b278;
}
a:hover {
  cursor: pointer;
  font-size: 18px;
}
</style>
