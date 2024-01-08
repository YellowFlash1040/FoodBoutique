import axios from "axios";

axios.defaults.baseURL = "https://food-boutique.b.goit.study/api/";

export function getProducts(filters) {
  return axios.get("products", {
    params: filters,
  });
}

export async function getCategories() {
  const res = await axios.get("products/categories");
  return res.data;
}
