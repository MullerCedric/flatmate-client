import * as types from '../types';

export default {
    [types.FETCH_DISCUSSIONS]({commit, state, rootState}) {
        if (state.discussions.length) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token;
        const flat_id = rootState.userStore.user.viewingFlat;
        if (!api_token) return Promise.reject('You must be logged in!');

        return window.axios.get('/discussions', {
            params: {api_token, flat_id, with: 'participants'}
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
    [types.SAVE_MESSAGE]({commit, rootState}, payload) {
        const api_token = rootState.userStore.user.api_token;

        const message = {
            message: payload.message,
            type: payload.type || 'message',
        }, discussionId = payload.discussionId;

        return window.axios.post('/discussions/' + discussionId, message, {
            params: {api_token},
        })
            .then((resp) => {
                commit(types.SET_NEW_MESSAGE, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    },
    [types.SAVE_DISCUSSION]({commit, rootState}, formData) {
        const api_token = rootState.userStore.user.api_token;
        const flat_id = rootState.userStore.user.viewingFlat;

        return new Promise((resolve, reject) => {
            window.axios.post('/discussions', {...formData, flat_id}, {
                params: {api_token},
            })
                .then((resp) => {
                    commit(types.SET_NEW_DISCUSSION, resp.data);
                    resolve(resp);
                })
                .catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                    reject(error);
                });
        });
    },
    [types.READ_MESSAGE]({commit, rootState}, msgId) {
        const api_token = rootState.userStore.user.api_token;
        return window.axios.post('/messages/' + msgId + '/read', null, {
            params: {api_token},
        })
            .then(resp => {
                commit(types.UPDATE_MESSAGE, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
};
