import ScDashboard from "../views/ScDashboard.vue";

export default [
    {
        path: "/",
        name: "dashboard",
        component: ScDashboard
    },
    {
        path: "/log-in",
        name: "log-in",
        component: () =>
            import(/* webpackChunkName: "log-in" */ "../views/auth/ScLogin.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/auth/ScRegister.vue")
    }
];
