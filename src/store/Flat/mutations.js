import * as types from '../types';

export default {
    [types.RESET_FLATS]: (state) => {
        state.flat = {};
        state.flats = [];
    },
    [types.SET_FLAT]: (state, payload) => {
        state.flat = {...payload};
    },
    [types.SET_FLATS]: (state, payload) => {
        state.flats = [...payload];
    },
};
