import keyMirror from 'key-mirror'

export const MAX_TIMEOUT = 2 * 60 * 1000;

export const DRIVER_REFRESH_RATE = 30; // Refresh rate in ms

export const GOOGLE_API_KEY = 'AIzaSyAbChC4mhcoyeibPK_o8rNHjjgVffObCdw';

export default keyMirror({
    CHANGE_LANG: null,
    SHOW_ORDER_MODAL: null,
    HIDE_ORDER_MODAL: null,
    SHOW_LOADING: null,
    HIDE_LOADING: null,
    SHOW_LOGIN: null,
    HIDE_LOGIN: null,
    SELECT_ROUTE: null,
    RESET_ROUTE: null,
    FAIL: null,
    SHOW_CONFIRM: null,
    HIDE_CONFIRM: null,
    SHOW_SELECT_ROUTE: null,
    HIDE_SELECT_ROUTE: null,
    SHOW_DRIVERS: null,
    HIDE_DRIVERS: null,

    GET_PROPOSED_ROUTE_REQUEST: null,
    GET_PROPOSED_ROUTE_ERROR: null,
    GET_PROPOSED_ROUTE_SUCCESS: null,

    GET_DRIVERS_ROUTES_REQUEST: null,
    GET_DRIVERS_ROUTES_SUCCESS: null,
    GET_DRIVERS_ROUTES_ERROR: null,

    ASSIGN_TIMER_TO_DRIVER: null,
    HOME_SELECT_DRIVER: null,

})
