import Vue from "vue";
import App from "./App.vue";

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import router from "./router";
import store from './store/store';

import (/* webpackPreload: true */ 'typeface-maven-pro/index.css');

Vue.config.productionTip = false;
Vue.use(Ionic);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
