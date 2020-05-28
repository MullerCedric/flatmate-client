import * as types from '../types';

export default {
    [types.FETCH_DISCUSSIONS]({commit, state, rootState}) {
        if (state.discussions.length) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token;

        return window.axios.get('/discussions', {
            params: {api_token, with: 'participants'}
        })
            .then(resp => commit(types.SET_DISCUSSIONS, resp.data))
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
    [types.FETCH_MESSAGES]({commit, state, rootState}, payload) {
        const offset = payload.offset || 0, limit = payload.limit || 20;
        if (state.discussions.length >= offset + limit) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token;

        return window.axios.get('/discussions/' + payload.id, {
            params: {api_token, with: 'participants', offset, limit}
        })
            .then(resp => commit(types.SET_MESSAGES, resp.data))
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
};
