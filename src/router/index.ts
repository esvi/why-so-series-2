import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/show/:id",
    name: "show",
    component: () => import("../views/ShowView.vue"),
  },
  // {
  //   path: "/search",
  //   name: "search",
  //   component: () => import("../views/SearchView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
