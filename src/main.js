import Vue from "vue";
import App from "./App.vue";

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import router from "./router";
import store from './store/store';

import (/* webpackPreload: true */ 'typeface-maven-pro/index.css');

window.Pusher = require('pusher-js');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

Vue.config.productionTip = false;
Vue.use(Ionic);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
