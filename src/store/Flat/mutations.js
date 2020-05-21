import * as types from '../types';
import Vue from "vue";

export default {
    [types.SET_FLAT]: (state, payload) => {
        Vue.set(state, 'flat', payload);
    },
    [types.SET_FLATS]: (state, payload) => {
        Vue.set(state, 'flats', payload);
    },
};
