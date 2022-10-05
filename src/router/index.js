import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from "../views/ProductsView.vue";
import CreateView from "../views/CreateView.vue";
import ReachView from "../views/CartView.vue";
import DetailView from "../views/DetailView.vue";
import ConfirmCreateView from "../views/ConfirmCreateView.vue";
import LandingView from "../views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/home",
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
      path: "/reach",
      name: "reach",
      component: ReachView,
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
