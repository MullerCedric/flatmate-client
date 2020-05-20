import * as types from '../types';
import * as db from '../fakeData';

export default {
    [types.FETCH_AND_ASSOCIATE_EVENTS]({commit, state}, limits) {
        // Abort if data already fetched and stored
        if (state.calendarEventsData.hasOwnProperty(limits.from)) return Promise.resolve();

        const oneOffEvents = new Promise(resolve => {
            // Simulating where clause for fetching current month only
            const limitedEvents = db.oneOffEvents.filter(x => {
                return (x.start_date >= limits.from && x.start_date <= limits.to);
            });

            // Simulating fetching one-off events
            setTimeout(() => {
                resolve(limitedEvents);
            }, Math.floor(Math.random() * 1000));
        });

        const recurringEvents = new Promise(resolve => {
            // Simulating where clause for fetching current et previous months only
            const limitedEvents = db.recurringEvents.filter(x => {
                if (x.start_date < limits.from) {
                    return (!x.end_date || x.end_date >= limits.from)
                }
                return (x.start_date <= limits.to);
            });

            // Simulating fetching recurring events
            setTimeout(() => {
                resolve(limitedEvents)
            }, Math.floor(Math.random() * 1000));
        });

        // When we got all our events, we store them in the same time
        return Promise.all([
            oneOffEvents,
            recurringEvents
        ]).then((resp) => {
            commit(types.ORDER_CALENDAR, {
                data: resp,
                limits
            });
        });
    },
    [types.FETCH_EVENTS_CATS]({commit, state}) {
        if (state.categories.length) return;
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: db.eventsCategories,
                })
            }, Math.floor(Math.random() * 500));
        })
            .then((resp) => {
                commit(types.SET_EVENTS_CATS, resp.data);
            })
            .catch(error => {
                window.console.error(error);
            })
    },
    [types.SAVE_EVENT]({commit}, formData) {

        //Treating data and simulating relationships
        let newEvent = {};
        newEvent.id = Math.floor(Math.random() * 100);
        newEvent.flat_id = formData.shared ? formData.flat_id : null;
        newEvent.category = db.eventsCategories.find(el => el.id === formData.category) || null;
        newEvent.confirm = formData.confirm ? formData.confirmType : null;
        newEvent.start_date = new Date(formData.start_date).getTime();
        newEvent.participants = [];
        formData.participants.forEach((el) => {
            newEvent.participants.push(
                db.flats.find(flat => flat.id === formData.flat_id)
                    .participants.find(user => {
                        return user.id === el;
                    }
                )
            );
        });
        if (newEvent.recurring) {
            newEvent.interval = formData.interval * 86400000;
            newEvent.end_date = new Date(formData.end_date).getTime();
        } else {
            newEvent.interval = null;
            newEvent.end_date = null;
        }

        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: newEvent,
                })
            }, Math.floor(Math.random() * 750));
        })
            .then((resp) => {
                commit(types.SET_NEW_EVENT, resp.data);
            })
            .catch(error => {
                window.console.error(error);
            })
    },
};
