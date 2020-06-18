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

    if (to.meta.middleware.indexOf('isAuth') !== -1) {
        if (!apiToken) {
            store.commit(types.PUT_REDIRECT_TO, to.name);
            next({name: 'onboard'});
            return;
        }
        store.dispatch(types.CONNECT).then(() => {
            if (!store.state.userStore.user.api_token) {
                store.commit(types.PUT_REDIRECT_TO, to.name);
                next({name: 'register'});
            } else {
                store.dispatch(types.HYDRATE_APP).then(() => {
                    if (to.meta.middleware.indexOf('hasFlat') !== -1) {
                        if (store.state.flatStore.flat.hasOwnProperty('id')) {
                            return next();
                        }
                        store.commit(types.PUT_REDIRECT_TO, to.name);
                        return next({
                            name: 'flats'
                        });
                    }
                    return next();
                }).catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                    store.commit(types.PUT_REDIRECT_TO, to.name);
                    return next(false);
                });
            }
        }).catch(error => {
            window.console.error(error);
            window.console.error(error.response.data);
            store.commit(types.PUT_REDIRECT_TO, to.name);
            return next(false);
        });
    } else {
        if (to.meta.middleware.indexOf('isGuest') === -1) {
            return next();
        }
        if (apiToken) {
            store.commit(types.PUT_REDIRECT_TO, to.name);
            return next({name: 'dashboard'});
        } else {
            return next();
        }
    }
});

router.afterEach(() => {
    store.commit(types.HIDE_LOADING_SCREEN);
});

export default router;
