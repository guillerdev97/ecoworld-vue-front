<script>
import { RouterLink } from "vue-router";
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
      const verify = confirm("Are you sure you want to create this product?");

      if (verify === true) {
        const response = await apiProducts.create(this.form);

        this.$router.push("/confirmcreate");

        return;
      }

      return;
    },
  },
};
</script>

<template>
  <form @submit.prevent="createProduct">
    <div id="firstSection" class="border">
      <div class="mb-3 w-75">
        <label for="name" class="form-label fs-6 fw-bold">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" />
      </div>

      <div class="mb-3 w-75">
        <label for="category" class="form-label fs-6 fw-bold">Category</label>
        <input
          type="text"
          class="form-control"
          id="category"
          v-model="form.category"
        />
      </div>

      <div class="mb-3 w-75">
        <label for="price" class="form-label fs-6 fw-bold">Cost</label>
        <input
          type="text"
          class="form-control"
          id="price"
          v-model="form.price"
        />
      </div>

      <div class="w-75">
        <label for="description" class="form-label fs-6 fw-bold"
          >Description</label
        ><br />
        <input
          id="description"
          class="form-control"
          v-model="form.description"
        />
      </div>
    </div>

    <div id="secondSection" class="border">
      <div class="mb-3 w-75">
        <label for="image" class="form-label fs-6 fw-bold">Image</label>
        <input type="text" class="form-control" id="image" v-model="form.img" />
      </div>

      <img src="../assets/img/apple.jpeg" alt="apple image" class="mb-3" />

      <button type="submit" class="btn">Create</button>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/base.css";

/* form */
form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64vh;
}

/* first section */
#firstSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 15px;
  margin-right: 65px;
  color: white;
  background-color: #b968a5;
}
label {
  letter-spacing: 1px;
}
input {
  height: 5vh;
  padding: 3px 7px;
  border: 2px solid rgb(137, 58, 211);
  border-radius: 0;
  font-size: 16px;
  box-shadow: none;
}
#description {
  height: 11vh;
}

/* second section */
#secondSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 15px;
  margin-left: 60px;
  color: white;
  background-color: #b968a5;
}
img {
  width: 30vh;
}
button {
  color: white;
  background-color: rgb(147, 67, 222);
  transition: all 0.2s ease-in;
}
button:hover {
  color: white;
  background-color: rgb(130, 41, 213);
  box-shadow: 0 2px 5px rgb(130, 41, 213);
}
</style>
