<script>
import { apiProducts } from "../services/apiProducts.js";

export default {
  name: "NewProductView",
  data() {
    return {
      form: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  methods: {
    async createProduct() {
      const response = await apiProducts.createProduct(this.form);
      console.log(response);
    },
  },
};
</script>

<template>
  <form @submit.prevent="createProduct">
    <div class="form-group">
      <label for="exampleFormControlInput1">Product Name:</label>
      <input
        type="text"
        class="form-control"
        name="name"
        id="exampleFormControlInput1"
        v-model="form.name"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Product Price:</label>
      <input
        type="float"
        class="form-control"
        name="price"
        id="exampleFormControlInput1"
        v-model="form.price"
      />
    </div>
    <!-- <div class="form-group">
      <label for="exampleFormControlSelect1">Product Category:</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Cereales en grano</option>
        <option>Frutas</option>
        <option>Hortalizas</option>
        <option>Carnes</option>
        <option>Pescados</option>
      </select>
    </div> -->
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Product Description:</label>
      <textarea
        class="form-control"
        name="description"
        v-model="form.description"
        id="exampleFormControlTextarea1"
        rows="3"
        cols="10"
      ></textarea>
      <button type="submit">Create Product</button>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/base.css";
</style>
