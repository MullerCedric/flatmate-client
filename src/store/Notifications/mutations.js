import * as types from '../types';

export default {
    [types.RESET_NOTIFICATIONS]: (state) => {
        state.notifications = [];
    },
    [types.SET_NOTIFICATIONS]: (state, payload) => {
        state.notifications = [...payload];
    },
};
