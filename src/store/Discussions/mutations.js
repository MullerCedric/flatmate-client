import * as types from '../types';
import Vue from "vue";

export default {
    [types.SET_DISCUSSIONS]: (state, payload) => {
        Vue.set(state, 'discussions', payload);
    },
    [types.SET_MESSAGES]: (state, payload) => {
        const dI = state.discussions.findIndex(x => {
            return (x.id === payload.id);
        });
        let discussions = [...state.discussions];
        if (discussions[dI]) {
            if (!discussions[dI].messages) discussions[dI].messages = [];
            discussions[dI].messages.push(...payload.messages);
            let uniqueMsg = [];
            discussions[dI].messages.forEach(msg => {
                const existingId = uniqueMsg.findIndex(x => {
                    return (x.id === msg.id);
                });
                if (existingId >= 0) {
                    uniqueMsg[existingId] = msg;
                } else {
                    uniqueMsg.push(msg);
                }
            });
            discussions[dI].messages = uniqueMsg;
        } else {
            discussions.push(payload)
        }
        Vue.set(state, 'discussions', discussions);
    },
    [types.SET_NEW_MESSAGE]: (state, payload) => {
        const dI = state.discussions.findIndex(x => {
            return (x.id === payload.discussion_id);
        });
        let discussions = [...state.discussions];

        discussions[dI].messages.unshift(payload);
        Vue.set(state, 'discussions', discussions);
    },
    [types.SET_NEW_DISCUSSION]: (state, payload) => {
        let discussions = [...state.discussions];
        discussions.push(payload);
        Vue.set(state, 'discussions', discussions);
    },
};
