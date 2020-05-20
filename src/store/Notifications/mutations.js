import * as types from '../types';
import Vue from "vue";

export default {
    [types.SET_NOTIFICATIONS]: (state, payload) => {
        Vue.set(state, 'notifications', payload);
    },
};
