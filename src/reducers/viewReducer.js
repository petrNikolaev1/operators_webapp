import constants from '@/constants'

const initialState = {
    orderModalShown: 0,
    loadingShow: false,
    loginShow: true,
    fail: 0,
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
        default:
            return state;
    }
}