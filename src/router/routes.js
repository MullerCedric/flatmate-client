import ScDashboard from "../views/ScDashboard";
import ScEventsCalendar from "../views/Events/ScEventsCalendar";

export default [
    {
        path: "/log-in",
        name: "log-in",
        component: () =>
            import(/* webpackChunkName: "log-in" */ "../views/auth/ScLogin.vue"),
        meta: {
            middleware: [
                "isGuest",
            ],
        },
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/auth/ScRegister.vue"),
        meta: {
            middleware: [
                "isGuest",
            ],
        },
    },


    {
        path: "/onboard",
        name: "onboard",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/ScOnboard.vue"),
        meta: {
            middleware: [
                "isGuest",
            ],
        },
    },

    {
        path: "/",
        name: "dashboard",
        component: ScDashboard,
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },

    {
        path: "/events",
        name: "eventsCalendar",
        component: ScEventsCalendar,
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },
    {
        path: "/events/create",
        name: "eventsCreate",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Events/ScEventsCreate.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },
    {
        path: "/events/:id(\\d+)",
        name: "eventsShow",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Events/ScEventsShow.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },
    {
        path: "/events/:id(\\d+)/edit",
        name: "eventsEdit",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Events/ScEventsCreate.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },

    {
        path: "/flats",
        name: "flats",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlats.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/flats/create",
        name: "flatsCreate",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlatsCreate.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/flats/search",
        name: "flatsSearch",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlatsSearch.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/flats/:id(\\d+)",
        name: "flatsShow",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Flats/ScFlatsShow.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },

    {
        path: "/settings",
        name: "settings",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettings.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/settings/profile",
        name: "settingsProfile",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsProfile.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/settings/upload-avatar",
        name: "settingsUploadAvatar",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsPickAvatar.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/settings/notifications",
        name: "settingsNotifications",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsNotifications.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/settings/data-storage",
        name: "settingsDataStorage",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsDataStorage.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/settings/help",
        name: "settingsHelp",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsHelp.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },
    {
        path: "/settings/legal-notice",
        name: "settingsLegalNotice",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Settings/ScSettingsLegalNotice.vue"),
        meta: {
            middleware: [
                "isAuth",
            ],
        },
    },

    {
        path: "/notes",
        name: "notes",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Notes/ScNotes.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },

    {
        path: "/wallet",
        name: "wallet",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Wallet/ScWallet.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },

    {
        path: "/discussions/create",
        name: "discussionsCreate",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Discussions/ScDiscussionsCreate.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },
    {
        path: "/discussions/:id(\\d+)",
        name: "discussionsShow",
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/Discussions/ScDiscussionsShow.vue"),
        meta: {
            middleware: [
                "isAuth", "hasFlat",
            ],
        },
    },
];
