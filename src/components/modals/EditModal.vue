<script>
import { apiProducts } from "../../services/apiProducts.js";

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
      <button class="red-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>

  <button id="editProduct" @click="showModal = true">📝</button>
</template>

<style scoped>
@import "../../assets/base.css";

.modal-overlay {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2vw;
  position: fixed;
  top: 60vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: white;
  background-color: #c9b68c;
  border: 1px solid #a5a2a9;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
  padding: 5vh;
  z-index: 100;
}
.form-camp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
  height: 4vh;
}
input {
  font-size: 1vw;
  padding: 0.3vw 0.5vw;
  height: 3.5vh;
  outline: none;
}
input:focus {
  border: 1px solid #c8a65cd1;
  box-shadow: 0 0 0.5vw #c8a65cd1;
}
.red-button {
  background-color: rgb(242, 25, 25);
  padding: 0.5vw 0.5vw;
  margin-left: 30px;
  color: white;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.8vw;
  height: 6vh;
  transition: all 0.2s ease-in;
}
.red-button:hover {
  background-color: rgb(223, 15, 15);
  box-shadow: 0 0 2px red;
}
.accept-button {
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.5vw 0.5vw;
  font-size: 0.8vw !important;
  margin-right: 30px;
  background-color: green;
  transition: all 0.2s ease-in;
  height: 6vh;
}
.accept-button:hover {
  background-color: rgb(1, 98, 1);
  box-shadow: 0 0 2px green;
}
.modal-buttons {
  display: flex;
  justify-content: space-around;
}

/* media queries */
@media (max-width: 1000px) {
  .modal-overlay {
    width: 35vw;
  }
  .form-camp {
    width: 25vw;
    height: 4.5vh;
  }
  input {
    font-size: 2vw;
  }
  .accept-button {
    height: 6.5vh;
  }
  .red-button {
    height: 6.5vh;
  }
}

@media (max-width: 750px) {
  .modal-overlay {
    width: 50vw;
  }
  .form-camp {
    width: 40vw;
    height: 7vh;
  }
  input {
    font-size: 2.3vw;
  }
  .accept-button {
    font-size: 2vw !important;
    height: 6.5vh;
  }
  .red-button {
    font-size: 2vw;
    height: 6.5vh;
  }
}

@media (max-width: 500px) {
  .modal-overlay {
    width: 60vw;
    padding: 3vh;
  }
  .form-camp {
    width: 40vw;
    height: 7vh;
  }
  input {
    font-size: 2.7vw;
  }
  .accept-button {
    font-size: 2vw !important;
    height: 5vh;
  }
  .red-button {
    font-size: 2vw;
    height: 5vh;
  }
}
</style>
