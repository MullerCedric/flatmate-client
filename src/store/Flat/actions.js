import * as types from '../types';
import * as db from '../fakeData';

export default {
    [types.FETCH_FLATS]({commit, state}) {
        if (state.flats.length) return;

        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: db.flats
                });
            }, Math.floor(Math.random() * 600));
        })
            .then(resp => commit(types.SET_FLATS, resp.data))
            .catch(error => {
                window.console.error(error);
            });
    },
};
