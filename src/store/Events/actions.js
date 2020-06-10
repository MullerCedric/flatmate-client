import * as types from '../types';

export default {
    [types.FETCH_AND_ASSOCIATE_EVENTS]({commit, state, rootState}, limits) {
        // Abort if data already fetched and stored
        if (state.calendarEventsData.hasOwnProperty(limits.from)) return Promise.resolve();
        const api_token = rootState.userStore.user.api_token;
        const flat_id = rootState.userStore.user.viewingFlat;

        const oneOffEvents = window.axios.get('/events', {
            params: {
                api_token,
                from: limits.from,
                to: limits.to,
                type: 'one_off',
                flat_id,
            }
        });

        const recurringEvents = window.axios.get('/events', {
            params: {
                api_token,
                from: limits.from,
                to: limits.to,
                type: 'recurring',
                flat_id,
            }
        });

        // When we got all our events, we store them in the same time
        return Promise.all([
            oneOffEvents,
            recurringEvents
        ])
            .then((resp) => {
                commit(types.ORDER_CALENDAR, {
                    data: [resp[0].data, resp[1].data],
                    limits
                })
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
    [types.FETCH_EVENTS_CATS]({commit, state, rootState}) {
        if (state.categories.length) return Promise.resolve();
        const api_token = rootState.userStore.user.api_token;

        return window.axios.get('/categories', {
            params: {api_token, type: 'events'}
        })
            .then((resp) => {
                commit(types.SET_EVENTS_CATS, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            });
    },
    [types.SAVE_EVENT]({commit, rootState}, formData) {
        const currUser = rootState.userStore.user;
        const api_token = currUser.api_token;
        const flat_id = rootState.userStore.user.viewingFlat;

        //Formatting data
        let newEvent = {};
        if (formData.id) {
            newEvent.id = formData.id;
        }
        newEvent.label = formData.label;
        newEvent.flat_id = formData.shared ? flat_id : null;
        newEvent.category_id = formData.category || null;
        newEvent.confirm = formData.confirm ? formData.confirmType : null;
        newEvent.start_date = new Date(formData.start_date).toISOString();
        newEvent.participants = formData.shared ? formData.participants : [currUser.id];
        if (formData.recurring) {
            newEvent.interval = formData.interval * 86400000;
            newEvent.end_date = formData.end_date ? new Date(formData.end_date).toISOString() : null;
        } else {
            newEvent.interval = null;
            newEvent.end_date = null;
        }

        return window.axios.post('/events', newEvent, {
            params: {api_token},
        })
            .then((resp) => {
                if (formData.id) {
                    commit(types.REMOVE_EVENT, resp.data.id);
                }
                commit(types.SET_NEW_EVENT, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    },
    [types.DELETE_EVENT]({commit, rootState}, payload) {
        const api_token = rootState.userStore.user.api_token;

        return window.axios.delete('/events/' + payload, {
            params: {api_token},
        })
            .then(() => {
                commit(types.REMOVE_EVENT, payload);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    },
    [types.FETCH_CONFIRMATIONS]({commit, rootState}, payload) {
        const api_token = rootState.userStore.user.api_token;

        return window.axios.get('/events/' + payload.event_id + '/confirmations', {
            params: {api_token, event_repeat_instance: payload.event_repeat_instance},
        })
            .then((resp) => {
                commit(types.SET_CONFIRMATIONS, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    },
    [types.SAVE_CONFIRMATION]({commit, rootState}, payload) {
        const api_token = rootState.userStore.user.api_token;

        return window.axios.post('/events/' + payload.event_id + '/confirmations', payload, {
            params: {api_token},
        })
            .then((resp) => {
                commit(types.SET_CONFIRMATIONS, resp.data);
            })
            .catch(error => {
                window.console.error(error);
                window.console.error(error.response.data);
            })
    },
};
