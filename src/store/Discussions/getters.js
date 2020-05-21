import * as types from '../types';

export default {
    [types.GET_DISCUSSIONS]: state => {
        return state.discussions;
    },
};
