import * as types from './types';

export default {
    [types.GET_SIDE_MENU_STATE]: state => {
        return state.sideMenuIsVisible;
    },
};
