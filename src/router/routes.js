import ScDashboard from "../views/ScDashboard";
import ScEventsCalendar from "../views/Events/ScEventsCalendar";

export default [
    {
        path: "/log-in",
        name: "log-in",
        component: () =>
            import(/* webpackChunkName: "log-in" */ "../views/auth/ScLogin.vue"),
        meta: {
            isForAuth: false,
        },
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/auth/ScRegister.vue"),
        meta: {
            isForAuth: false,
        },
    },

    {
        path: "/",
        name: "dashboard",
        component: ScDashboard,
        meta: {
            isForAuth: true,
        },
    },

    {
        path: "/events",
        name: "eventsCalendar",
        component: ScEventsCalendar,
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/events/create",
        name: "eventsCreate",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Events/ScEventsCreate.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/events/:id(\\d+)",
        name: "eventsShow",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Events/ScEventsShow.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/events/:id(\\d+)/edit",
        name: "eventsEdit",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Events/ScEventsCreate.vue"),
        meta: {
            isForAuth: true,
        },
    },

    {
        path: "/flats",
        name: "flats",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlats.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/flats/create",
        name: "flatsCreate",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlatsCreate.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/flats/search",
        name: "flatsSearch",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlatsSearch.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/flats/:id(\\d+)",
        name: "flatsShow",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlatsShow.vue"),
        meta: {
            isForAuth: true,
        },
    },

    {
        path: "/settings",
        name: "settings",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettings.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/settings/profile",
        name: "settingsProfile",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsProfile.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/settings/notifications",
        name: "settingsNotifications",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsNotifications.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/settings/legal-notice",
        name: "settingsLegalNotice",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsLegalNotice.vue"),
        meta: {
            isForAuth: true,
        },
    },

    {
        path: "/notes",
        name: "notes",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Notes/ScNotes.vue"),
        meta: {
            isForAuth: true,
        },
    },

    {
        path: "/wallet",
        name: "wallet",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Wallet/ScWallet.vue"),
        meta: {
            isForAuth: true,
        },
    },

    {
        path: "/discussions/create",
        name: "discussionsCreate",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Discussions/ScDiscussionsCreate.vue"),
        meta: {
            isForAuth: true,
        },
    },
    {
        path: "/discussions/:id(\\d+)",
        name: "discussionsShow",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Discussions/ScDiscussionsShow.vue"),
        meta: {
            isForAuth: true,
        },
    },
];
