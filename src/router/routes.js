import ScDashboard from "../views/ScDashboard";
import ScWallet from "../views/Wallet/ScWallet";

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
        name: "wallet",
        component: ScWallet
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: ScDashboard
    },
    {
        path: "/calendar",
        name: "calendar",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Calendar/ScCalendar.vue")
    },
    {
        path: "/notes",
        name: "notes",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Notes/ScNotes.vue")
    },
];
