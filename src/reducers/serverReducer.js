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
    filters: {status: [0, 1, 2]}
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
            return {
                ...omit(state, 'error'),
                loaded: true,
                res: action.result,
                driversOptions: optimalDriversToOptions(action.res)
            };
        case constants.GET_OPTIMAL_DRIVERS_ERROR:
            return {
                ...omit(state, 'res'),
                loaded: true,
                error: action.error
            };
        case constants.SELECT_OPTIMAL_DRIVER:
            return {
                ...state,
                selectedDriver: state.driversOptions[action.driverId]
            };
        default:
            return state;
    }
}


