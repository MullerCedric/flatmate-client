import ScDashboard from "../views/ScDashboard";
import ScCalendar from "../views/Calendar/ScCalendar";

export default [
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
    },
    {
        path: "/",
        name: "calendar",
        component: ScCalendar
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: ScDashboard
    },
    {
        path: "/notes",
        name: "notes",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Notes/ScNotes.vue")
    },
    {
        path: "/wallet",
        name: "wallet",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Wallet/ScWallet.vue")
    },
];
