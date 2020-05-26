import * as types from '../types';

export default {
    [types.FETCH_FLATS]({commit, state, rootState}) {
        if (state.flats.length) return Promise.resolve();
        const api_token = rootState.userStore.user.api_token;

        return window.axios.get('/flats', {
            params: {api_token, with: 'participants,creator'}
        })
            .then(resp => commit(types.SET_FLATS, resp.data))
            .catch(error => {
                window.console.error(error);
            });
    },
};
