import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from "../views/ProductsView.vue";
import CreateView from "../views/CreateView.vue";
import RecipesView from "../views/RecipesView.vue";
import ReachView from "../views/ReachView.vue";
import DetailView from "../views/DetailView.vue";
import ConfirmCreateView from "../views/ConfirmCreateView.vue";
import EditView from "../views/CreateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/allproducts",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
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
    {
      path: "/edit",
      name: "edit",
      component: EditView,
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/confirmcreate",
      name: "confirmcreate",
      component: ConfirmCreateView,
    },
  ],
});

export default router;
