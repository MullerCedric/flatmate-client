import * as types from '../types';

export default {
    [types.GET_EVENTS_FOR_TMSTPM]: state => payload => {
        if (!state.calendarEventsData.hasOwnProperty(payload)) return {};
        return state.calendarEventsData[payload];
    },
};
