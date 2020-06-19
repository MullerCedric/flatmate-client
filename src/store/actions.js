import * as types from './types';
import * as db from './fakeData';
import Echo from "laravel-echo";

export default {
    [types.RESET_ALL]: ({commit}) => {
        return new Promise(resolve => {
            commit(types.RESET_APP);
            commit(types.RESET_USER);
            commit(types.RESET_DISCUSSIONS);
            commit(types.RESET_FLATS);
            commit(types.RESET_NOTIFICATIONS);
            commit(types.RESET_EVENTS);
            commit(types.DISCONNECT_ECHO);
            resolve();
        });
    },

    [types.DISCONNECT]: ({dispatch}) => {
        return new Promise(resolve => {
            dispatch(types.RESET_ALL).then(() => {
                if (localStorage.getItem('userApiToken')) {
                    localStorage.removeItem('userApiToken');
                }
                if (localStorage.getItem('userViewingFlat')) {
                    localStorage.removeItem('userViewingFlat');
                }
                resolve();
            });
        });
    },
    [types.HYDRATE_APP]({commit, state, rootState}) {
        if (!rootState.userStore.user.hasOwnProperty('api_token') && !localStorage.getItem('userApiToken')) {
            window.console.error('You must be logged in!');
            return Promise.reject('You must be logged in!');
        }
        if (rootState.flatStore.flat.hasOwnProperty('id') && rootState.echo) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token || localStorage.getItem('userApiToken');
        const flatId = parseInt(localStorage.getItem('userViewingFlat') || rootState.userStore.user.viewingFlat, 10);

        // Fetching current flat info with members
        let fetchingFlat = null;
        if (flatId) {
            fetchingFlat = window.axios.get('/flats/' + flatId, {
                params: {api_token, with: 'participants,creator'}
            });
            fetchingFlat.then(resp => commit(types.SET_FLAT, resp.data))
                .catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                });
        }

        // Fetching user notifications (all flats)
        const fetchingNotifications = new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: db.notifications
                });
            }, Math.floor(Math.random() * 600));
        });
        fetchingNotifications.then(resp => commit(types.SET_NOTIFICATIONS, resp.data))
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });

        // Fetching user new messages for the current flat
        // TODO

        const allPromises = [];
        if (flatId) allPromises.push(fetchingFlat);
        allPromises.push(fetchingNotifications);

        return new Promise((resolve, reject) => {
            Promise.all(allPromises)
                .then(() => {
                    if (!state.echo) {
                        commit(types.INIT_ECHO, new Echo({
                            broadcaster: 'pusher',
                            key: '1364c0804863ac3396da',
                            cluster: 'eu',
                            encrypted: true,
                            authEndpoint: process.env.VUE_APP_BROADCAST_BASE + '?api_token=' + api_token,
                        }));
                    }
                    resolve();
                })
                .catch(error => {
                    window.console.error(error);
                    window.console.error(error.response.data);
                    reject(error);
                });
        });
    },
};
