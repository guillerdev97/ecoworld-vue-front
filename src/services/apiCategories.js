import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export const apiCategories = {
  async list() {
    const response = await axios.get(baseUrl + "/categories");

    const categoriesData = response.data;

    return categoriesData;
  },
};
