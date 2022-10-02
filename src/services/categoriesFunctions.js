import { apiProducts } from "./apiProducts.js";

export const categories = {
  async initialState(categoriesData, categoriesState) {
    const categories = await categoriesData;

    categories.forEach((categorie) => {
      const categorieObj = {
        name: categorie.name,
        checked: false,
      };

      categoriesState.push(categorieObj);
    });
  },

  async checkbox(categoriesState) {
    const checkedCategories = [];

    await categoriesState.forEach((categorie) => {
      if (categorie.checked === true) {
        const name = categorie.name;

        checkedCategories.push(name);
      }
    });

    return checkedCategories;
  },

  async filter(productsData, checkedCategories) {
    const newProducts = [];

    await productsData.forEach((product) => {
      if (checkedCategories.includes(product.category)) {
        newProducts.push(product);
      }
    });

    if (newProducts.length === 0) {
      const response = apiProducts.list();

      const products = response.data;

      return products;
    }

    if (newProducts.length > 0) {
      const products = newProducts;

      return products;
    }
  },
};
