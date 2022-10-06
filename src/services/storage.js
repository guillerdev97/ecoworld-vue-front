export const storage = {
  items: [],

  getItem(item) {
    if (this.items.includes(item)) {
      alert("This product is in the cart");

      return;
    }
    this.items.push(item);
  },

  listItems() {
    return this.items;
  },
};
