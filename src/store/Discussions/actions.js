import * as types from '../types';
import * as db from '../fakeData';

export default {
    [types.FETCH_DISCUSSIONS]({commit, state}) {
        if (state.discussions.length) return;

        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: db.discussions
                });
            }, Math.floor(Math.random() * 600));
        })
            .then(resp => commit(types.SET_DISCUSSIONS, resp.data))
            .catch(error => {
                window.console.error(error);
            });
    },
};
