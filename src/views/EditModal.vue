<script>
import { apiProducts } from "../services/apiProducts.js";

export default {
  name: "EditView",

  data() {
    return {
      productId: this.product.id,
      form: {
        id: this.product.id,
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        description: this.product.description,
      },
      showModal: false,
    };
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async editProduct() {
      await apiProducts.update(this.form);

      alert(`${this.product.name} has been updated`);

      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="form-camp">
      <label for="name"><b>Name</b></label>
      <input
        type="text"
        placeholder=""
        name="name"
        id="name"
        required
        v-model="form.name"
      />
    </div>
    <div class="form-camp">
      <label for="category"><b>Category</b></label>
      <input
        type="text"
        placeholder=""
        name="category"
        id="category"
        required
        v-model="form.category"
      />
    </div>
    <div class="form-camp">
      <label for="price"><b>Cost</b></label>
      <input
        type="text"
        placeholder=""
        id="price"
        required
        v-model="form.price"
      />
    </div>
    <div class="form-camp">
      <label for="description"><b>Description</b></label>
      <input
        type="text"
        placeholder=""
        id="description"
        required
        v-model="form.description"
      />
    </div>
    <div class="form-camp">
      <label for="description"><b>Image</b></label>
      <input type="text" placeholder="" id="img" required v-model="form.img" />
    </div>
    <div class="modal-buttons">
      <button class="accept-button" v-on:click="editProduct">Aceptar</button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="editProduct" @click="showModal = true">📝</button>
</template>

<style scoped>
  @import "../assets/base.css";
  
.modal-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2vw;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: white;
  background-color: var(--beige-palette);
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
  padding: 5vh;
  z-index: 100;
}
.form-camp {
  display: flex;
  flex-direction: column;
}
/* #editProduct {
  
} */

.cancel-button {
  background-color: rgb(242, 25, 25);
}
.accept-button {
  background-color: green;
}
.modal-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
