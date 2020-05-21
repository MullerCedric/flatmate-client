import * as types from './types';
import * as db from './fakeData';

export default {
    [types.HYDRATE_APP]({commit, rootState}) {
        if (!rootState.userStore.user) {
            window.console.error('You must be logged in!');
            return;
        }
        if (rootState.flatStore.flat.hasOwnProperty('id')) return;

        const flatId = rootState.userStore.user.viewingFlat;

        // Fetching current flat info with members
        const fetchingFlat = new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: db.flats.find((flat) => flat.id === flatId)
                });
            }, Math.floor(Math.random() * 600));
        });
        fetchingFlat.then(resp => commit(types.SET_FLAT, resp.data))
            .catch(error => {
                window.console.error(error);
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
            });

        // Fetching user new messages for the current flat
        // TODO

        return Promise.all([
            fetchingFlat,
            fetchingNotifications,
        ]);
    },
};
