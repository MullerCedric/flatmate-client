import Dashboard from "../views/Dashboard.vue";

export default [
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
