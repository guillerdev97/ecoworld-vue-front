<script>
import { apiProducts } from "../../services/apiProducts.js";

export default {
  name: "CreateModal",

  data() {
    return {
      showModal: false,
      form: {
        name: "",
        category: "",
        price: "",
        description: "",
      },
    };
  },

  methods: {
    async createProduct() {
      const verify = confirm("Are you sure you want to create this product?");

      if (verify === true) {
        if (
          this.form.category === "Snacks and nuts" ||
          this.form.category === "Fruits and vegetables" ||
          this.form.category === "Meat and fish" ||
          this.form.category === "Cereals and seeds"
        ) {
          await apiProducts.create(this.form);

          alert(`${this.form.name} has been created`);

          location.reload();
        }
        alert("You have to choose a correct category name");

        return;
      }

      return;
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
      <button
        type="submit"
        v-on:click="createProduct"
        class="accept-button fs-6 mt-4"
        @click="showModal = false"
      >
        ADD NEW PRODUCT
      </button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button @click="showModal = true">ADD NEW PRODUCT</button>
</template>

<style scoped>
@import "../../assets/base.css";

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
