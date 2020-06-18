import * as types from '../types';

export default {
    [types.RESET_EVENTS]: (state) => {
        state.calendarEventsData = {};
        state.categories = [];
        state.confirmations = [];
    },
    [types.ORDER_CALENDAR]: (state, {data, limits, currUserId}) => {
        let limitedEvents = {};
        limitedEvents[limits.from] = {};
        if (!data.length) {
            state.calendarEventsData = {...state.calendarEventsData, ...limitedEvents};
            return;
        }

        for (let i = limits.from; i <= limits.to; i = i + 86400000) {
            let events = [];

            data[0].forEach(ev => {
                const evSd = new Date(ev.start_date);
                evSd.setHours(0, 0, 0, 0);
                if (i === evSd.getTime()) {
                    ev.start_date = new Date(ev.start_date);
                    if (ev.end_date) ev.end_date = new Date(ev.end_date);
                    ev.isAParticipant = !!(ev.participants.find((user) => user.id === currUserId));
                    events.push(ev);
                }
            });

            data[1].forEach(ev => {
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
                        ev.isAParticipant = !!(ev.participants.find((user) => user.id === currUserId));
                        events.push(ev);
                    }
                }
            });

            limitedEvents[limits.from][i] = events;
        }
        state.calendarEventsData = {...state.calendarEventsData, ...limitedEvents};
    },
    [types.SET_EVENTS_CATS]: (state, payload) => {
        state.categories = [...payload];
    },
    [types.SET_NEW_EVENT]: (state, {data, currUserId}) => {
        let ev = {...data};
        let evSd = new Date(data.start_date), evEd = false;
        ev.start_date = new Date(data.start_date);
        evSd.setHours(0, 0, 0, 0);
        if (data.end_date) {
            evEd = new Date(data.end_date);
            ev.end_date = new Date(data.end_date);
            evEd.setHours(0, 0, 0, 0);
        }
        ev.isAParticipant = !!(ev.participants.find((user) => user.id === currUserId));

        for (const month in state.calendarEventsData) {
            if (!state.calendarEventsData.hasOwnProperty(month)) continue;
            for (const day in state.calendarEventsData[month]) {
                if (!state.calendarEventsData[month].hasOwnProperty(day)) continue;
                if (!data.interval) {
                    // One-off event
                    if (parseInt(day, 10) === evSd.getTime()) {
                        let limitedEvents = {...state.calendarEventsData};
                        limitedEvents[month][day].push(ev);
                        state.calendarEventsData = {...limitedEvents};
                    }
                } else {
                    // Recurring event
                    if (evSd <= parseInt(day, 10) && ((evEd && evEd >= parseInt(day, 10)) || !evEd)) {
                        if ((parseInt(day, 10) - evSd.getTime()) % data.interval === 0) {
                            let limitedEvents = {...state.calendarEventsData};
                            limitedEvents[month][day].push(ev);
                            state.calendarEventsData = {...limitedEvents};
                        }
                    }
                }
            }
        }
    },
    [types.REMOVE_EVENT]: (state, id) => {
        let limitedEvents = {...state.calendarEventsData};
        for (const month in state.calendarEventsData) {
            for (const day in state.calendarEventsData[month]) {
                limitedEvents[month][day] = state.calendarEventsData[month][day].filter(event => {
                    return event.id !== parseInt(id, 10);
                });
            }
        }
        state.calendarEventsData = {...limitedEvents};
    },
    [types.SET_CONFIRMATIONS]: (state, payload) => {
        if (!payload.length) return;
        let confirmations = {...state.confirmations};
        confirmations[payload[0].pivot.event_repeat_instance] = payload;
        state.confirmations = {...confirmations};
    },
};
