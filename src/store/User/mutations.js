import * as types from '../types';

export default {
    [types.RESET_USER]: (state) => {
        state.user = {};
    },
    [types.SET_USER]: (state, payload) => {
        const viewingFlat = localStorage.getItem('userViewingFlat') || payload.viewingFlat;
        localStorage.setItem('userViewingFlat', viewingFlat);
        localStorage.setItem('userApiToken', payload.api_token);
        state.user = {...payload, viewingFlat};
    },
    [types.SET_USER_PROP]: (state, payload) => {
        state.user[payload.key] = payload.val;
    },
}
