import * as types from '../types';
import Vue from "vue";

export default {
    [types.ORDER_CALENDAR]: (state, payload) => {
        Vue.set(state.calendarEventsData, payload.limits.from, {});
        if (!payload.data.length) return;

        for (let i = payload.limits.from; i < payload.limits.to; i = i + 86400000) {
            let events = [];

            payload.data[0].forEach(ev => {
                const evd = new Date(ev.start_date);
                evd.setHours(0, 0, 0, 0);
                if (i === evd.getTime()) {
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

            Vue.set(state.calendarEventsData[payload.limits.from], i, events);
        }
    },
};
