import constants from '@/constants'

const initialState = {
    orderModalShown: -1,
    orderDriversShown: -1,
    selectRouteShown: -1,
    loadingShow: false,
};

export function viewReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SHOW_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: action.orderId
            };
        case constants.HIDE_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: -1
            };
        case constants.SHOW_DRIVERS:
            return {
                ...state,
                orderDriversShown: action.orderId
            };
        case constants.HIDE_DRIVERS:
            return {
                ...state,
                orderDriversShown: -1
            };
        case constants.SHOW_SELECT_ROUTE:
            return {
                ...state,
                selectRouteShown: action.orderId
            };
        case constants.HIDE_SELECT_ROUTE:
            return {
                ...state,
                selectRouteShown: -1
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
        default:
            return state;
    }
}
