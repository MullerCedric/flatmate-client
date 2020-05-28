import * as types from '../types';

export default {
    [types.GET_DISCUSSIONS]: state => {
        return state.discussions;
    },
    [types.GET_DISCUSSION]: state => id => {
        return state.discussions.filter(x => {
            return (x.id === parseInt(id));
        })[0];
    },
};
