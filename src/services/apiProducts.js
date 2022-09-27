import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export const apiProducts = {
  getAllProducts() {
    return axios.get(baseUrl + "/products");
  },
  getProduct(id) {
    return axios.get(baseUrl + `/product/${id}`);
  },
  deleteProduct(id) {
    return axios.delete(baseUrl + `/product/delete/${id}`);
  },
  createProduct(formData) {
    return axios.post(baseUrl + "/products/create", formData);
  },
  updateProduct(formData) {
    return axios.put(baseUrl + "/products/edit" + formData);
  },
};
