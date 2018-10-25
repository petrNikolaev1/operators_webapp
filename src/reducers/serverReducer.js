import omit from 'object.omit'
import cookies from 'js-cookie'

import constants from '@/constants'
import {optimalDriversToOptions} from "@/util/api";

const initLoginState = {};

export function loginReducer(state = initLoginState, action) {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {...state, loaded: false};
        case constants.LOGIN_SUCCESS:
            cookies.set('token', action.result.auth_token);
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.LOGIN_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        case constants.LOGOUT:
            cookies.remove('token');
            return {};
        default:
            return state;
    }
}

const initOrdersState = {
    filters: {status: [0, 1, 2, 3]}
};

export function ordersReducer(state = initOrdersState, action) {
    switch (action.type) {
        case constants.GET_ORDERS_REQUEST:
            return {...state, loaded: false};
        case constants.GET_ORDERS_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.GET_ORDERS_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        case constants.FILTER:
            return {...state, filters: action.payload};
        default:
            return state;
    }
}

const initOptimalDriversState = {};

export function optimalDriversReducer(state = initOptimalDriversState, action) {
    switch (action.type) {
        case constants.GET_OPTIMAL_DRIVERS_REQUEST:
            return {
                ...state,
                loaded: false
            };
        case constants.GET_OPTIMAL_DRIVERS_SUCCESS:
            const options = optimalDriversToOptions(action.result);
            return {
                ...omit(state, 'error'),
                loaded: true,
                res: action.result,
                options,
                selected: (!!state.selected && !!options.find(option => option.vehicleId === state.selected.vehicleId)) ? state.selected : ''
            };
        case constants.GET_OPTIMAL_DRIVERS_ERROR:
            return {
                ...omit(state, ['res', 'options']),
                loaded: true,
                error: action.error,
                selected: '',
            };
        case constants.SELECT_OPTIMAL_DRIVER:
            return {
                ...state,
                selected: action.selectedOptimalDriver,
            };
        case constants.RESET_OPTIMAL_DRIVER:
            return {
                ...state,
                selected: '',
            };
        default:
            return state;
    }
}

const initOrderApproveState = {};

export function orderApproveReducer(state = initOrderApproveState, action) {
    switch (action.type) {
        case constants.APPROVE_ORDER_REQUEST:
            return {...state, loaded: false};
        case constants.APPROVE_ORDER_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.APPROVE_ORDER_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}

const initOrderRejectState = {};

export function orderRejectReducer(state = initOrderRejectState, action) {
    switch (action.type) {
        case constants.REJECT_ORDER_REQUEST:
            return {...state, loaded: false};
        case constants.REJECT_ORDER_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.REJECT_ORDER_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}


