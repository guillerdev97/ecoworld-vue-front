<script>
import { apiProducts } from "../services/apiProducts.js";

export default {
  name: "EditView",

  data() {
    return {
      form: {
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        description: this.product.description,
        img: this.product.img,
      },
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
      const doYouWant = confirm("Are you sure you want to edit this product?");

      if (doYouWant === true) {
        await apiProducts.update(this.form);

        alert(`This product... "${this.product.name}"" has been updated`);

        this.$router.push("/allproducts");

        return;
      }

      return;
    },
  },

  created() {
    console.log(this.product);
  },
};
</script>

<template>
  <form
    @submit.prevent="editProduct"
    class="d-flex justify-content-center align-items-center"
  >
    <div
      id="firstSection"
      class="d-flex flex-column justify-content-center align-items-center border"
    >
      <div class="mb-3">
        <label for="name" class="form-label fs-6 fw-bold">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" />
      </div>

      <div class="mb-3">
        <label for="category" class="form-label fs-6 fw-bold">Category</label>
        <input
          type="text"
          class="form-control"
          id="category"
          v-model="form.category"
        />
      </div>

      <div class="mb-3">
        <label for="price" class="form-label f-6 fw-bold">Cost</label>
        <input
          type="text"
          class="form-control"
          id="price"
          v-model="form.price"
        />
      </div>

      <div>
        <label for="description" class="form-label fs-6 fw-bold"
          >Description</label
        ><br />
        <textarea
          id="description"
          cols="30"
          rows="2"
          v-model="form.description"
        ></textarea>
      </div>
    </div>

    <div
      id="secondSection"
      class="d-flex flex-column justify-content-center align-items-center border"
    >
      <div class="mb-3">
        <label for="image" class="form-label fs-6 fw-bold">Image</label>
        <input type="text" class="form-control" id="image" v-model="form.img" />
      </div>

      <img src="../assets/img/apple.jpeg" alt="apple image" class="mb-3" />

      <button type="submit" class="btn">Edit</button>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/base.css";

/* form */
form {
  width: 100%;
  height: 64vh;
}

/* first section */
#firstSection {
  width: 35%;
  height: 50vh;
  padding: 15px;
  margin-right: 8%;
  color: white;
  background-color: #b968a5d3;
}
label {
  padding-left: 3px;
  letter-spacing: 1px;
  text-shadow: 1px 0 black;
}
input {
  width: 42vh;
  height: 4vh;
  padding: 3px 7px;
  border: 1px solid rgb(137, 58, 211);
  border-radius: 0;
  box-shadow: 0 0 0 1px rgb(174, 141, 205);
  font-size: 16px;
}
input:focus {
  border: 2px solid rgb(137, 58, 211);
  outline: 0 none;
  box-shadow: 0 0 0 2px rgba(227, 227, 227, 0.895) inset;
}
#description {
  width: 42vh;
  padding: 3px 7px;
  border: 1px solid rgb(137, 58, 211);
  border-radius: 0;
  box-shadow: 0 0 0 3px rgb(174, 141, 205);
  font-size: 16px;
  resize: none;
}
#description:focus {
  outline: 0 none;
  box-shadow: 0 0 0 2px rgba(227, 227, 227, 0.895) inset;
}

/* second section */
#secondSection {
  width: 35%;
  height: 50vh;
  padding: 15px;
  margin-left: 8%;
  color: white;
  background-color: #b968a5d3;
}
img {
  width: 35vh;
  height: 26vh;
  border: 2px solid white;
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
  letter-spacing: 1px;
}
</style>
