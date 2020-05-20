import * as types from '../types';
import Vue from "vue";

export default {
    [types.SET_FLAT]: (state, payload) => {
        Vue.set(state, 'flat', payload);
    },
};
