import * as types from '../types';

export default {
    [types.GET_DISCUSSIONS]: state => {
        return state.discussions;
    },
    [types.GET_DISCUSSION]: state => id => {
        return state.discussions.find(x => {
            return (x.id === parseInt(id));
        });
    },
};
