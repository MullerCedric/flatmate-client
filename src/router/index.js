import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes';
import * as types from "../store/types";
import store from "../store/store";

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const apiToken = store.state.userStore.user.api_token || localStorage.getItem('userApiToken');
    window.console.info('Navigating to ' + to.name + ' from ' + from.name + '...');

    if (to.meta.isForAuth) {
        window.console.info('Auth IS required');
        if (!apiToken) {
            store.commit(types.HIDE_LOADING_SCREEN);
            next({name: 'log-in'});
            return;
        }
        store.dispatch(types.CONNECT).then(() => {
            if (!store.state.userStore.user.api_token) {
                window.console.warn('Route réservée aux membres');
                store.commit(types.HIDE_LOADING_SCREEN);
                next({name: 'log-in'});
            } else {
                store.dispatch(types.HYDRATE_APP).then(() => {
                    window.console.info('Navigation done');
                    store.commit(types.HIDE_LOADING_SCREEN);
                    next();
                }).catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                });
            }
        }).catch(error => {
            window.console.error(error);
            window.console.error(error.response.data);
        });
    } else {
        window.console.info('Auth IS NOT required');
        if (apiToken) {
            window.console.warn('Route réservée aux invités');
            store.commit(types.HIDE_LOADING_SCREEN);
            next({name: 'eventsCalendar'});
        } else {
            window.console.info('Navigation done');
            store.commit(types.HIDE_LOADING_SCREEN);
            next();
        }
    }
});
router.afterEach(() => {
    store.commit(types.HIDE_LOADING_SCREEN);
});

export default router;
