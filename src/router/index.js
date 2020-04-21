import Vue from "vue";
import routes from './routes';
import {IonicVueRouter} from "@ionic/vue";

Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes
});

export default router;
