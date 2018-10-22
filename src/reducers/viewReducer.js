import constants from '@/constants'

const initialState = {
    orderModalShown: 0,
    orderDriversShown: 0,
    loadingShow: false,
    loginShow: false,
    fail: 0,
    selectRouteShown: -1,
    filters: {status: -1}
};

export function viewReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SHOW_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: action.id
            };
        case constants.HIDE_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: 0
            };
        case constants.SHOW_LOADING:
            return {
                ...state,
                loadingShow: true
            };
        case constants.HIDE_LOADING:
            return {
                ...state,
                loadingShow: false
            };
        case constants.SHOW_LOGIN:
            return {
                ...state,
                loginSHow: true
            };
        case constants.HIDE_LOGIN:
            return {
                ...state,
                loginShow: false
            };
        case constants.FAIL:
            return {
                ...state,
                fail: action.fail
            };
        case constants.SHOW_DRIVERS:
            return {
                ...state,
                orderDriversShown: action.id
            };
        case constants.HIDE_DRIVERS:
            return {
                ...state,
                orderDriversShown: 0
            };
        case constants.SHOW_SELECT_ROUTE:
            return {
                ...state,
                selectRouteShown: action.payload
            };
        case constants.HIDE_SELECT_ROUTE:
            return {
                ...state,
                selectRouteShown: -1
            };
        case constants.FILTER:
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state;
    }
}
