import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import register from "@/components/register.vue";
import login from "@/components/login.vue";
import dasbord from "@/components/dashbord.vue";

const routes = [
  {
    path: "/",
    name: "Ho-me",
    component: home,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/dashboard",
    name: "dash-board",
    component: dasbord,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
