import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import register from "@/components/register.vue";
import login from "@/components/login.vue";
import dasbord from "@/components/dashbord.vue";
import userdata from "@/components/userdata.vue";
import header from "@/components/header.vue";



function guest(to, from, next) {
  if (localStorage.resigterUser) {
    next({ name: "dash-board" });
  } else next();
}
function guard(to, from, next) {
  if (localStorage.resigterUser) {
    next({ name: "login" });
  } else next();
}

const routes = [
  {
    path: "/",
    name: "Ho-me",
    component: home,
    beforeEnter: guest,
  },
  {
    path: "/register",
    name: "register",
    component: register,
    beforeEnter: guest,
  },
  {
    path: "/login",
    name: "login",
    component: login,
    beforeEnter: guest,
  },
  {
    path: "/dashboard",
    name: "dash-board",
    component: dasbord,
    beforeEnter: guard,
  },
  {
    path: "/userdata/:id",
    name: "userdata",
    component: userdata,
  },
  {
    path: "/header",
    name: "hea-der",
    component: header,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
