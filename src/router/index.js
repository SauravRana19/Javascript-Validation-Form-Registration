import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import register from "@/components/register.vue";
import login from "@/components/login.vue";
import dasbord from "@/components/dashbord.vue";
import userdata from "@/components/userdata.vue";
import header from "@/components/header.vue";
import userProfile from "@/components/userprofile.vue";
import userform from "@/components/userform.vue";
import newuser from "@/components/newuser.vue";

const routes = [
  {
    path: "/",
    name: "Ho-me",
    component: home,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/register",
    name: "Register",
    component: register,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/dashboard",
    name: "dash-board",
    component: dasbord,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/userdata/:id",
    name: "userdata",
    component: userdata,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/header",
    name: "hea-der",
    component: header,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/userProfile",
    name: "user-profile",
    component: userProfile,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/userform",
    name: "user-form",
    component: userform,
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/newuser",
    name: "new-user",
    component: newuser,
    // meta: {
    //   auth: true,
    // },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// function isLoggedIn() {
//   return localStorage.getItem("registerUser");
// }

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (!isLoggedIn()) {
//       next({
//         name: "login",
//         query: { redirect: to.fullPath },

//       });
//     } else {
//       next();
//     }
//   } else {
//     if (isLoggedIn()) {
//       if(to.name!="login"){
//         next({
//           name: "user-profile",
//           query: { redirect: to.fullPath },
//         });
//       }else{
//         next({
//           name: "user-profile",
//         });
//       }
//     }else{
//       next();
//     }
//   }
// })
export default router;
