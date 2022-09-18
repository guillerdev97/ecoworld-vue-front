<script>
export default {
  name: "TheCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteProduct(id) {
      this.$http
        .delete("http://localhost:8080/api/v1/product/delete/" + id)
        .then(alert("Congrats"))
        .then(location.reload());
    },
  },
};
</script>

<template>
  <div id="card">
    <img src="../assets/img/tomate.jpg" alt="tomatoes" />
    <div id="body">
      <h1 class="fs-3 text-white text-center fw-bold pt-2">
        {{ product.name }}
      </h1>
      <p class="text-white text-center fw-bold mt-1">
        Origin: Asturias<br />
        Price: {{ product.price }}
      </p>
      <div
        class="buttons mt-4 d-flex justify-content-around align-items-center"
      >
        <a href="#"><button class="btn btn-success">Contact</button></a>
        <button v-on:click="deleteProduct(product.id)" class="btn btn-danger">
          Delete
        </button>
        <a href="#"><button class="btn btn-primary">Update</button></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";

#card {
  width: 300px;
  height: 350px;
  border: 2px solid var(--brown-palette);
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
#card:hover {
  cursor: pointer;
  border: 2px solid #c8a65cd1;
  box-shadow: 0 0 5px #c8a65cd1;
}
img {
  display: block;
  width: 100%;
  height: 175px;
  border-radius: 5px;
}
#body {
  width: 100%;
  height: 171px;
  background-color: var(--brown-palette);
  border-radius: 0 0 3px 3px;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
