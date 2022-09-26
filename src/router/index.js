import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import AboutView from "../views/AboutView.vue";
import NewProductView from "../views/NewProductView.vue";
import RecipesView from "../views/RecipesView.vue";
import ReachView from "../views/ReachView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/allproducts",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/create",
      name: "create",
      component: NewProductView,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesView,
    },
    {
      path: "/reach",
      name: "reach",
      component: ReachView,
    },
  ],
});

export default router;
