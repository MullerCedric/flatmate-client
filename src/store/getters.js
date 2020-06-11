import * as types from './types';

export default {
    [types.GET_SIDE_MENU_STATE]: state => {
        return state.sideMenuIsVisible;
    },
    [types.GET_LOADING_SCREEN_STATE]: state => {
        return state.showLoadingScreen;
    },
};
