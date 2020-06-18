import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import userStore from './User/store';
import discussionsStore from './Discussions/store';
import eventsStore from './Events/store';
import flatStore from './Flat/store';
import notificationsStore from './Notifications/store';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        userStore,
        discussionsStore,
        eventsStore,
        flatStore,
        notificationsStore,
    }
})
