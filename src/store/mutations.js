import * as types from './types';

export default {
    [types.TOGGLE_SIDE_MENU]: (state) => {
        state.sideMenuIsVisible = !state.sideMenuIsVisible;
    },
    [types.CLOSE_SIDE_MENU]: (state) => {
        state.sideMenuIsVisible = false;
    },
};
