import * as types from '../types';

export default {
    [types.GET_FLATS]: state => {
        return state.flats;
    },
    [types.GET_FLAT]: state => {
        return state.flat;
    },
    [types.GET_FLAT_FROM_ID]: state => id => {
        return state.flats.find(flat => {
            return flat.id === parseInt(id, 10);
        }) || {};
    },
    [types.GET_FLAT_USERS]: state => {
        if (!state.flat.hasOwnProperty('participants')) return [];
        return state.flat.participants;
    },
};
