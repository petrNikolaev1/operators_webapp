import omit from 'object.omit'
import cookies from 'js-cookie'
import {cancelWs} from '@/util/ws'

import constants from '@/constants'
import {optimalDriversToOptions} from "@/util/api";

const initLoginState = {};

export function loginReducer(state = initLoginState, action) {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {...state, loaded: false};

        case constants.GET_OPERATOR_PROFILE_SUCCESS:
            return {...omit(state, 'error'), loaded: true, profile: action.result};

        case constants.LOGIN_ERROR:
        case constants.GET_OPERATOR_PROFILE_ERROR:
            cancelWs();
            cookies.remove('token');
            return {...omit(state, 'profile'), loaded: true, error: action.error};

        case constants.LOGOUT:
            cancelWs();
            cookies.remove('token');
            return {};

        default:
            return state;
    }
}

const initOrdersState = {
    filters: {
        statusFilters: {
            options: [
                {value: constants.PENDING_CONFIRMATION, selected: true},
                {value: constants.IN_PROGRESS, selected: true},
                {value: constants.DELIVERED, selected: true},
                {value: constants.REJECTED, selected: true}
            ]
        }
    }
};

export function ordersReducer(state = initOrdersState, action) {
    switch (action.type) {
        case constants.GET_ORDERS_REQUEST:
            return {...state, loaded: false};
        case constants.GET_ORDERS_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.GET_ORDERS_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        case constants.HANDLE_STATUS_FILTERS:
            return {...state, filters: {...state.filters, statusFilters: action.statusFilters}};
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

const initRegisterOperatorState = {};

export function registerOperatorReducer(state = initRegisterOperatorState, action) {
    switch (action.type) {
        case constants.REGISTER_OPERATOR_REQUEST:
            return {...state, loaded: false};
        case constants.REGISTER_OPERATOR_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.REGISTER_OPERATOR_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}


const initRegisterDriverState = {};

export function registerDriverReducer(state = initRegisterDriverState, action) {
    switch (action.type) {
        case constants.REGISTER_DRIVER_REQUEST:
            return {...state, loaded: false};
        case constants.REGISTER_DRIVER_SUCCESS:
            return {...omit(state, 'error'), loaded: true, res: action.result};
        case constants.REGISTER_DRIVER_ERROR:
            return {...omit(state, 'res'), loaded: true, error: action.error};
        default:
            return state;
    }
}
