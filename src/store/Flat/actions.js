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
                window.console.error(error.response.data);
            });
    },
    [types.SWITCH_FLAT]({dispatch, commit}, to) {
        return new Promise(resolve => {
            commit(types.RESET_DISCUSSIONS);
            commit(types.RESET_FLATS);
            commit(types.RESET_NOTIFICATIONS);
            commit(types.RESET_EVENTS);
            commit(types.SET_USER_PROP, {
                val: to,
                key: 'viewingFlat',
            });
            localStorage.setItem('userViewingFlat', to);
            dispatch(types.HYDRATE_APP).then(() => resolve());
        });
    },
    [types.SAVE_FLAT]({dispatch, rootState}, formData) {
        const api_token = rootState.userStore.user.api_token;

        return new Promise((resolve, reject) => {
            window.axios.post('/flats', {...formData}, {
                params: {api_token},
            })
                .then((resp) => {
                    if (formData.id) {
                        // TODO handle flat update
                        // commit(types.REMOVE_EVENT, resp.data.id);
                        resolve(resp.data);
                    } else {
                        dispatch(types.SWITCH_FLAT, resp.data.id)
                            .then(() => {
                                dispatch(types.FETCH_DISCUSSIONS)
                                    .then(() => resolve(resp.data));
                            });
                    }
                })
                .catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                    reject(error);
                });
        });
    },
    [types.JOIN_FLAT]({dispatch, state, rootState}, formData) {
        if (state.flats.find(flat => {
            return flat.key === formData.key;
        })) return Promise.resolve();
        const api_token = rootState.userStore.user.api_token;

        return new Promise((resolve, reject) => {
            window.axios.post('/flats/join/' + formData.key, null, {
                params: {api_token},
            })
                .then((resp) => {
                    dispatch(types.SWITCH_FLAT, resp.data.id)
                        .then(() => {
                            dispatch(types.FETCH_DISCUSSIONS)
                                .then(() => resolve(resp.data));
                        });
                })
                .catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                    reject(error);
                });
        });
    },
};
