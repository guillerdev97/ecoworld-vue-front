<script>
import { apiProducts } from "../services/apiProducts.js";

export default {
  name: "EditProduct",

  data() {
    return {
      form: {
        id: this.product.id,
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        description: this.product.description,
        img: this.product.img,
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
      await apiProducts.updateProduct(this.form);

      alert(`${this.product.name} has been updated`);

      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="form-camp">
      <label for="name"><b>Nombre</b></label>
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
      <label for="category"><b>Category:</b></label>
      <input
        type="text"
        placeholder=""
        id="category"
        required
        v-model="form.category"
      />
    </div>
    <div class="form-camp">
      <label for="cost"><b>Cost</b></label>
      <input
        type="text"
        placeholder=""
        id="cost"
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
      <label for="img"><b>Image url</b></label>
      <input type="text" placeholder="" id="img" required v-model="form.img" />
    </div>
    <div class="modal-buttons">
      <button class="accept-button" v-on:click="editProduct">Aceptar</button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="editStudent" @click="showModal = true">Editar</button>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2vw;
  position: fixed;
  margin: auto;
  transform: translate(-50%, -50%);
  background-color: white;
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

#editStudent {
  background-color: var(--base-color-blue);
}

button,
.teacherName {
  border: none;
  border-radius: 2vh;
  height: 7vh;
  padding: 2vw;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2.5vh;
}

.cancel-button {
  background-color: red;
}

.accept-button {
  background-color: green;
}
</style>
