import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export const apiCategories = {
  getAllCategories() {
    return axios.get(baseUrl + "/categories");
  },
};
