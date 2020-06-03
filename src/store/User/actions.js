import * as types from '../types';

export default {
    [types.CONNECT]({commit, state}, payload) {
        const api_token = state.user.api_token || localStorage.getItem('userApiToken');
        let userPromise = null;
        if (localStorage.getItem('userApiToken') && !state.user.api_token) {
            window.console.log('CONNECTING from existing storage token');
            userPromise = window.axios.get('/user', {params: {api_token}});
        } else if (payload) {
            window.console.log('CONNECTING from form');
            userPromise = window.axios.post('/user/auth', payload);
        } else if (state.user.api_token) {
            window.console.log('ALREADY CONNECTED');
            return Promise.resolve();
        } else {
            window.console.error('An error occurred for auth');
            return Promise.reject('An error occurred for auth');
        }

        return userPromise
            .then((resp) => {
                window.console.log('Promise ok, committing');
                commit(types.SET_USER, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    }
};
