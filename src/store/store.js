import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';

import userStore from './User/store';
import calendarStore from './Calendar/store';
import flatStore from './Flat/store';
import notificationsStore from './Notifications/store';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        ...state,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions,
    modules: {
        userStore,
        calendarStore,
        flatStore,
        notificationsStore,
    }
})
