import * as types from '../types';

export default {
    [types.GET_EVENTS_FOR_TMSTPM]: state => payload => {
        if (!state.calendarEventsData.hasOwnProperty(payload)) return {};
        return state.calendarEventsData[payload];
    },
    [types.GET_EVENTS_CATS]: state => {
        return state.categories;
    },
    [types.GET_EVENT]: state => id => {
        for (const month in state.calendarEventsData) {
            for (const day in state.calendarEventsData[month]) {
                const result = state.calendarEventsData[month][day].find(event => {
                    return event.id === parseInt(id, 10);
                });

                if (result) {
                    return result
                }
            }
        }
        return null;
    },
    [types.GET_CONFIRMATIONS]: state => payload => {
        return state.confirmations[payload] || [];
    },
};
