import omit from 'object.omit'
import constants from '@/constants'

const initLoginState = {};

export function loginReducer(state = initLoginState, action) {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {...state, loaded: false};
        case constants.LOGIN_SUCCESS:
            document.cookie = `token=${action.result.auth_token}`;
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.LOGOUT:
            document.cookie = ``;
            return {};
        case constants.LOGIN_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}

const initOrdersState = {
};

export function ordersReducer(state = initOrdersState, action) {
    switch (action.type) {
        case constants.GET_ORDERS_REQUEST:
            return {...state, loaded: false};
        case constants.GET_ORDERS_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.GET_ORDERS_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}

