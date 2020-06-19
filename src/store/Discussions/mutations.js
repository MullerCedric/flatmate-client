import * as types from '../types';

export default {
    [types.RESET_DISCUSSIONS]: (state) => {
        state.discussions = [];
    },
    [types.SET_DISCUSSIONS]: (state, payload) => {
        state.discussions = [...payload];
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
        state.discussions = [...discussions];
    },
    [types.SET_NEW_MESSAGE]: (state, payload) => {
        const dI = state.discussions.findIndex(x => {
            return (x.id === payload.discussion_id);
        });
        let discussions = [...state.discussions];

        if (!discussions[dI].messages) return;
        discussions[dI].messages.unshift(payload);
        discussions[dI].latestMessage = payload;
        discussions.sort((a) => {
            return a.latestMessage.id === payload.id ? -1 : 1;
        });
        state.discussions = [...discussions];
    },
    [types.SET_NEW_DISCUSSION]: (state, payload) => {
        let discussions = [...state.discussions];
        discussions.unshift(payload);
        state.discussions = [...discussions];
    },
    [types.UPDATE_MESSAGE]: (state, payload) => {
        const dI = state.discussions.findIndex(x => {
            return (x.id === payload.discussion_id);
        });
        let discussions = [...state.discussions];
        if (!discussions[dI].messages) return;
        const mI = discussions[dI].messages.findIndex(x => {
            return (x.id === payload.id);
        });
        discussions[dI].messages[mI] = {...payload};
        state.discussions = [...discussions];
    },
    [types.SET_LATEST_MESSAGE]: (state, payload) => {
        const dI = state.discussions.findIndex(x => {
            return (x.id === payload.discussion_id);
        });
        let discussions = [...state.discussions];
        const isNewMessage = discussions[dI].latestMessage.id !== payload.id;
        discussions[dI].latestMessage = payload;
        if (isNewMessage) {
            discussions.sort((a) => {
                return a.latestMessage.id === payload.id ? -1 : 1;
            });
        }
        state.discussions = [...discussions];
    },
};
