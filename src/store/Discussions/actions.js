import * as types from '../types';

export default {
    [types.FETCH_DISCUSSIONS]({commit, state, rootState}) {
        if (state.discussions.length) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token;

        return new window.axios.get('/discussions', {
            params: {api_token, with: 'participants,messages'}
        })
            .then(resp => commit(types.SET_DISCUSSIONS, resp.data))
            .catch(error => {
                window.console.error(error);
            });
    },
};
