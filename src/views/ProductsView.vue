<script>
import TheCard from "../components/TheCard.vue";
export default {
  name: "ProductsView",
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  methods: {
    /*  getAllProducts() {
      this.$http
        .get("/products")
        .then((productsData) => {
          this.products = productsData.data;
          console.log(this.products);
        })
        .catch((e) => {
          console.log(e);
        });
    }, */
  },
  created() {
    /*   this.getAllProducts(); */
  },
  components: { TheCard },
};
</script>

<template>
  <main class="d-flex justify-content-around align-items-start">
    <div
      id="categoriesSection"
      class="d-flex flex-column justify-content-around align-items-center"
    >
      <h1>ALL PRODUCTS</h1>

      <ul>
        <li></li>
      </ul>

      <router-link to="/create"><h2>*Add new product</h2></router-link>
    </div>

    <div id="productsSection">
      <div class="m-auto mt-3 ml-3 mr-3 mb-3">
        <TheCard />
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../assets/base.css";

#categoriesSection {
  width: 15%;
  margin-top: 25px;
}
h1 {
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: left;
  text-decoration: underline;
}

ul {
  list-style-type: none;
}
li {
  cursor: pointer;
  margin-bottom: 5px;
  color: rgb(113, 113, 113);
}
li:hover {
  text-decoration: underline;
}
h2 {
  cursor: pointer;
  margin-top: 15px;
  font-size: 16px;
  text-align: left;
}
h2:hover {
  color: black;
  text-decoration: underline;
}
#productsSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  margin-top: 25px;
  margin-bottom: 35px;
  max-height: 700px;
  border: 3px solid #d0b272b6;
  border-radius: 1px;
  overflow-y: scroll;
}
</style>
