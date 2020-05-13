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
            }, Math.floor(Math.random() * Math.floor(1750)));
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
            }, Math.floor(Math.random() * Math.floor(1750)));
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
};
