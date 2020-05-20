import * as types from '../types';

export default {
    [types.GET_USER]: state => {
        return state.user;
    },
};
