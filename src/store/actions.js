import * as types from './types';
import * as db from './fakeData';

export default {
    [types.HYDRATE_APP]({commit, rootState}) {
        if (!rootState.userStore.user) {
            window.console.error('You must be logged in!');
            return Promise.reject('You must be logged in!');
        }
        if (rootState.flatStore.flat.hasOwnProperty('id')) return Promise.resolve();

        const api_token = rootState.userStore.user.api_token;
        const flatId = rootState.userStore.user.viewingFlat;

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
