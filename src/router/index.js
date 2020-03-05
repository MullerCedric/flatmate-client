import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

import Dashboard from "../views/Dashboard.vue";

const routes = [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/log-in",
      name: "log-in",
      component: () =>
        import(/* webpackChunkName: "log-in" */ "../views/auth/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "../views/auth/Register.vue")
    }
  ];
  
  const router = new IonicVueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes
  });
  
  export default router;