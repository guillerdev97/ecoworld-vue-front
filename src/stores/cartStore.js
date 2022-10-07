import { defineStore } from "pinia";

export const cartStore = defineStore({
  id: "cart",
  state: () => ({
    products: [],
  }),
  getters: {},
  actions: {
    addProduct(obj) {
      let confirmation = confirm("Do you want to add to the cart?");

      if (confirmation === true) {
        if (this.products.includes(obj)) {
          alert("This product is in the cart");

          return;
        }

        this.products.push(obj);

        return;
      }

      return;
    },
    listProducts() {
      return this.products;
    },
  },
});
