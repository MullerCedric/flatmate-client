import * as types from '../types';
import Vue from "vue";

export default {
    [types.SET_DISCUSSIONS]: (state, payload) => {
        Vue.set(state, 'discussions', payload);
    },
};
