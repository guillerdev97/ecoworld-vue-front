import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

export const apiProducts = {
  list() {
    return axios.get(baseUrl + "/products");
  },
  getDetail(id) {
    return axios.get(baseUrl + `/product/${id}`);
  },
  delete(id) {
    return axios.delete(baseUrl + `/product/delete/${id}`);
  },
  create(formData) {
    return axios.post(baseUrl + "/products/create", formData);
  },
  update(formData) {
    return axios.put(baseUrl + "/products/edit", formData);
  },
};
