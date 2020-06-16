import * as types from '../types';

export default {
    [types.CONNECT]({commit, state}, payload) {
        const api_token = state.user.api_token || localStorage.getItem('userApiToken');
        let userPromise = null;
        if (localStorage.getItem('userApiToken') && !state.user.api_token) {
            commit(types.SHOW_LOADING_SCREEN);
            userPromise = window.axios.get('/user', {params: {api_token}});
        } else if (payload) {
            commit(types.SHOW_LOADING_SCREEN);
            userPromise = window.axios.post('/user/auth', payload);
        } else if (state.user.api_token) {
            return Promise.resolve();
        } else {
            window.console.error('An error occurred for auth');
            return Promise.reject('An error occurred for auth');
        }

        return userPromise
            .then((resp) => {
                commit(types.SET_USER, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    },
    [types.REGISTER]({commit}, payload) {
        return window.axios.post('/user', payload)
            .then((resp) => {
                commit(types.SET_USER, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
    [types.UPLOAD_AVATAR]({commit, state}, payload) {
        const api_token = state.user.api_token;

        return window.axios.post('/user/avatar', payload, {
            params: {api_token},
            headers: {'content-type': 'multipart/form-data'},
        })
            .then((resp) => {
                commit(types.SET_USER_PROP, {
                    val: resp.data,
                    key: 'avatar',
                });
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
    [types.PATCH_USER_PROP]({commit, state}, payload) {
        const api_token = state.user.api_token;

        return window.axios.patch('/user', {profile: payload}, {
            params: {api_token},
        })
            .then(() => {
                for (const key in payload) {
                    if (payload.hasOwnProperty(key)) {
                        if (key !== 'old_password' && key !== 'password' && key !== 'password_confirmation') {
                            commit(types.SET_USER_PROP, {
                                val: payload[key],
                                key,
                            });
                        }
                    }
                }
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
};
