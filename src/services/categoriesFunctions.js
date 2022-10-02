import { apiProducts } from "./apiProducts.js";

export const categories = {
  initialState(categoriesData, categoriesState) {
    const categories = categoriesData;

    categories.forEach((categorie) => {
      const categorieObj = {
        name: categorie.name,
        checked: false,
      };

      categoriesState.push(categorieObj);
    });
  },

  checkbox(categoriesState) {
    const checkedCategories = [];

    categoriesState.forEach((categorie) => {
      if (categorie.checked === true) {
        const name = categorie.name;

        checkedCategories.push(name);
      }
    });

    return checkedCategories;
  },

  filter(productsData, checkedCategories) {
    const newProducts = [];

    productsData.forEach((product) => {
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
