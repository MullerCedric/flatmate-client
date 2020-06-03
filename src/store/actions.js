import * as types from './types';
import * as db from './fakeData';

export default {
    [types.DISCONNECT]: ({commit}) => {
        return new Promise(resolve => {
            commit(types.RESET_APP);
            commit(types.RESET_USER);
            commit(types.RESET_DISCUSSIONS);
            commit(types.RESET_FLATS);
            commit(types.RESET_NOTIFICATIONS);
            commit(types.RESET_CALENDAR);
            if (localStorage.getItem('userApiToken')) {
                localStorage.removeItem('userApiToken');
            }
            if (localStorage.getItem('userViewingFlat')) {
                localStorage.removeItem('userViewingFlat');
            }
            resolve();
        }).then(() => {
            window.console.log('store ok');
        }).catch(e => {
            window.console.log('store pas ok');
            window.console.log(e);
        });
    },
    [types.HYDRATE_APP]({commit, rootState}) {
        window.console.log('Hydrating');
        if (!rootState.userStore.user && !localStorage.getItem('userApiToken')) {
            window.console.error('You must be logged in!');
            return Promise.reject('You must be logged in!');
        }
        if (rootState.flatStore.flat.hasOwnProperty('id')) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token || localStorage.getItem('userApiToken');
        const flatId = rootState.userStore.user.viewingFlat || localStorage.getItem('userViewingFlat');

        // Fetching current flat info with members
        const fetchingFlat = window.axios.get('/flats/' + flatId, {
            params: {api_token, with: 'participants,creator'}
        });
        fetchingFlat.then(resp => commit(types.SET_FLAT, resp.data))
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });

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

        return Promise.all([
            fetchingFlat,
            fetchingNotifications,
        ]);
    },
};
