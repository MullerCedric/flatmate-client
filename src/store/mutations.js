import * as types from './types';

export default {
    [types.RESET_APP]: (state) => {
        state.sideMenuIsVisible = false;
    },
    [types.TOGGLE_SIDE_MENU]: (state) => {
        state.sideMenuIsVisible = !state.sideMenuIsVisible;
    },
    [types.CLOSE_SIDE_MENU]: (state) => {
        state.sideMenuIsVisible = false;
    },
    [types.OPEN_SIDE_MENU]: (state) => {
        state.sideMenuIsVisible = true;
    },
    [types.SHOW_LOADING_SCREEN]: (state) => {
        state.showLoadingScreen = true;
    },
    [types.HIDE_LOADING_SCREEN]: (state) => {
        state.showLoadingScreen = false;
    },
    [types.PUT_REDIRECT_TO]: (state, payload) => {
        state.redirectTo = payload;
    },
    [types.INIT_ECHO]: (state, payload) => {
        state.echo = payload;
    },
    [types.DISCONNECT_ECHO]: (state) => {
        state.echo.disconnect();
        // state.echo = null;
    }
};
