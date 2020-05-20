import * as types from '../types';

export default {
    [types.GET_FLAT]: state => {
        return state.flat;
    },
    [types.GET_FLAT_USERS]: state => {
        if (!state.flat.hasOwnProperty('participants')) return [];
        return state.flat.participants;
    },
};
