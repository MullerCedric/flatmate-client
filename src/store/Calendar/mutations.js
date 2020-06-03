import * as types from '../types';

export default {
    [types.RESET_CALENDAR]: (state, payload) => {
        state = payload;
    },
    [types.ORDER_CALENDAR]: (state, payload) => {
        let limitedEvents = {};
        limitedEvents[payload.limits.from] = {};
        if (!payload.data.length) {
            state.calendarEventsData = {...state.calendarEventsData, ...limitedEvents};
            return;
        }

        for (let i = payload.limits.from; i <= payload.limits.to; i = i + 86400000) {
            let events = [];

            payload.data[0].forEach(ev => {
                const evSd = new Date(ev.start_date);
                evSd.setHours(0, 0, 0, 0);
                if (i === evSd.getTime()) {
                    ev.start_date = new Date(ev.start_date);
                    if (ev.end_date) ev.end_date = new Date(ev.end_date);
                    events.push(ev);
                }
            });

            payload.data[1].forEach(ev => {
                let evSd = new Date(ev.start_date), evEd = false;
                if (ev.end_date) {
                    evEd = new Date(ev.end_date);
                    evEd.setHours(0, 0, 0, 0);
                }
                evSd.setHours(0, 0, 0, 0);

                if (evSd <= i && ((evEd && evEd >= i) || !evEd)) {
                    if ((i - evSd.getTime()) % ev.interval === 0) {
                        ev.start_date = new Date(ev.start_date);
                        if (ev.end_date) ev.end_date = new Date(ev.end_date);
                        events.push(ev);
                    }
                }
            });

            limitedEvents[payload.limits.from][i] = events;
        }
        state.calendarEventsData = {...state.calendarEventsData, ...limitedEvents};
    },
    [types.SET_EVENTS_CATS]: (state, payload) => {
        state.categories = [...payload];
    },
    [types.SET_NEW_EVENT]: (state, payload) => {
        let ev = {...payload};
        let evSd = new Date(payload.start_date), evEd = false;
        ev.start_date = new Date(payload.start_date);
        evSd.setHours(0, 0, 0, 0);
        if (payload.end_date) {
            evEd = new Date(payload.end_date);
            ev.end_date = new Date(payload.end_date);
            evEd.setHours(0, 0, 0, 0);
        }

        for (const month in state.calendarEventsData) {
            if (!state.calendarEventsData.hasOwnProperty(month)) continue;
            for (const day in state.calendarEventsData[month]) {
                if (!state.calendarEventsData[month].hasOwnProperty(day)) continue;
                if (!payload.interval) {
                    // One-off event
                    if (parseInt(day, 10) === evSd.getTime()) {
                        let limitedEvents = {...state.calendarEventsData};
                        limitedEvents[month][day].push(ev);
                        state.calendarEventsData = {...limitedEvents};
                    }
                } else {
                    // Recurring event
                    if (evSd <= parseInt(day, 10) && ((evEd && evEd >= parseInt(day, 10)) || !evEd)) {
                        if ((parseInt(day, 10) - evSd.getTime()) % payload.interval === 0) {
                            let limitedEvents = {...state.calendarEventsData};
                            limitedEvents[month][day].push(ev);
                            state.calendarEventsData = {...limitedEvents};
                        }
                    }
                }
            }
        }
    },
};
