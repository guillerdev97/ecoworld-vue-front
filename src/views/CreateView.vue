<script>
import { apiProducts } from "../services/apiProducts.js";

export default {
  name: "CreateView",

  data() {
    return {
      form: {
        name: "",
        category: "",
        price: "",
        description: "",
        cost: "",
        img: "",
      },
    };
  },

  methods: {
    async createProduct() {
      const response = await apiProducts.create(this.form);

      console.log(response);

      alert("Congrats");
    },
  },
};
</script>

<template>
  <form @submit.prevent="createProduct">
    <div id="firstSection" class="mr-2 border">
      <div class="mb-3 w-25">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" />
      </div>

      <div class="mb-3 w-25">
        <label for="category" class="form-label">Category</label>
        <input
          type="text"
          class="form-control"
          id="category"
          v-model="form.category"
        />
      </div>

      <div class="mb-3 w-25">
        <label for="price" class="form-label">Cost</label>
        <input
          type="text"
          class="form-control"
          id="price"
          v-model="form.price"
        />
      </div>

      <div class="mb-3 w-25">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          cols="30"
          rows="3"
          v-model="form.description"
        ></textarea>
      </div>
    </div>

    <div id="secondSection" class="ml-2 border">
      <div class="mb-3 w-25">
        <label for="image" class="form-label">Image</label>
        <input type="text" class="form-control" id="image" v-model="form.img" />
      </div>

      <button type="submit" class="btn">Create</button>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/base.css";

form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 63vh;
}

#firstSection {
  width: 40%;
}

#secondSection {
  width: 40%;
}

button {
  color: white;
  background-color: blueviolet;
}
</style>
