import constants from '@/constants'
import cookies from "js-cookie";

import {initWs, cancelWs} from '@/util/ws'

export const statuses = [
    constants.PENDING_CONFIRMATION,
    constants.IN_PROGRESS,
    constants.DELIVERED,
    constants.REJECTED,
];

export const mapStatusToNum = status => statuses.indexOf(status);

export const optimalDriversToOptions = (vehicles) => {
    return vehicles.map(vehicle => ({
        timeToOrder: vehicle.time_till_order,
        value: vehicle.vehicle_json.id,
        type: vehicle.vehicle_json.type,
        vehicleId: vehicle.vehicle_json.id,
        driversIds: vehicle.vehicle_json.drivers.reduce((res, cur) => res.concat(cur.id), []),
        label: vehicle.vehicle_json.drivers.reduce((res, cur) => res.length > 0 ? res + ', ' + cur.name : res + cur.name, ''),
    }));
};

export default (command, params) => ({...commandsData[command], params})

export const commandsData = {

    [constants.login]: {
        command: constants.login,
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.LOGIN_REQUEST,
            onError: constants.LOGIN_ERROR,
            onSuccess: constants.LOGIN_SUCCESS,
        },
        customSuccessHandler: (res, actions) => {
            const {resetChatHistory, initChatHistories, apiReq} = actions;
            cookies.set('token', res.auth_token);
            apiReq(constants.operator);
            initWs();
            resetChatHistory();
            initChatHistories()
        },
        customErrorHandler: (err, actions)=>{
          const {hideLoading} = actions;
          hideLoading();
        },
        withoutLoadingEnd: true
    },

    [constants.orders]: {
        command: constants.orders,
        method: 'GET',
        paramsType: constants.QUERY,
        events: {
            onRequest: constants.GET_ORDERS_REQUEST,
            onError: constants.GET_ORDERS_ERROR,
            onSuccess: constants.GET_ORDERS_SUCCESS
        }
    },

    [constants.register]: {
        command: constants.register,
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.REGISTER_CUSTOMER_REQUEST,
            onError: constants.REGISTER_CUSTOMER_ERROR,
            onSuccess: constants.REGISTER_CUSTOMER_SUCCESS,
        },
        defaultSuccessHandler: {text: 'REGISTER_CUSTOMER_SUCCESS'},
        defaultErrorHandler: {text: 'REGISTER_CUSTOMER_ERROR'},
        customSuccessHandler: (res, actions) => {
            cookies.set('token', res.auth_token);
        },
    },

    [constants.getOptimalDrivers]: {
        command: constants.getOptimalDrivers,
        getCommand: orderId => `orders/${orderId}/nearest/vehicles`,
        fillCommandWith: 'orderId',
        method: 'GET',
        paramsType: constants.QUERY,
        events: {
            onRequest: constants.GET_OPTIMAL_DRIVERS_REQUEST,
            onError: constants.GET_OPTIMAL_DRIVERS_ERROR,
            onSuccess: constants.GET_OPTIMAL_DRIVERS_SUCCESS
        },
        customSuccessHandler: (res, actions) => {
            if (res.length === 0) {
                const {resetOrderApproveInfo, hideSelectRoute, hideSelectDrivers, showError} = actions;
                hideSelectDrivers();
                hideSelectRoute();
                resetOrderApproveInfo();
                showError({text: 'NO_OPTIMAL_DRIVERS'})
            }
        }

    },
    [constants.approveOrder]: {
        command: constants.approveOrder,
        getCommand: orderId => `orders/${orderId}/confirm`,
        fillCommandWith: 'orderId',
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.APPROVE_ORDER_REQUEST,
            onError: constants.APPROVE_ORDER_ERROR,
            onSuccess: constants.APPROVE_ORDER_SUCCESS
        },
        defaultSuccessHandler: {
            text: 'APPROVE_SUCCESS'
        },
        customSuccessHandler: (res, actions) => {
            const {apiReq} = actions;
            apiReq(constants.orders, {limit: 1000, offset: 0})
        },
        defaultErrorHandler: {
            text: 'APPROVE_ERROR'
        },
    },
    [constants.rejectOrder]: {
        command: constants.rejectOrder,
        getCommand: orderId => `orders/${orderId}/reject`,
        fillCommandWith: 'orderId',
        method: 'POST',
        paramsType: constants.BODY,
        events: {
            onRequest: constants.REJECT_ORDER_REQUEST,
            onError: constants.REJECT_ORDER_ERROR,
            onSuccess: constants.REJECT_ORDER_SUCCESS
        },
        defaultSuccessHandler: {
            text: 'REJECT_SUCCESS'
        },
        customSuccessHandler: (res, actions) => {
            const {apiReq} = actions;
            apiReq(constants.orders, {limit: 1000, offset: 0})
        },
        defaultErrorHandler: {
            text: 'REJECT_ERROR'
        },
    },

    [constants.messages]: {
        command: constants.messages,
        method: 'GET',
        paramsType: constants.QUERY,
        events: {
            onRequest: constants.GET_MESSAGES_REQUEST,
            onError: constants.GET_MESSAGES_ERROR,
            onSuccess: constants.GET_MESSAGES_SUCCESS,
        },
        withoutLoading: true
    },

    [constants.operator]: {
        command: constants.operator,
        getCommand: '',
        method: 'GET',
        paramsType: constants.QUERY,
        events: {
            onRequest: constants.GET_OPERATOR_PROFILE_REQUEST,
            onError: constants.GET_OPERATOR_PROFILE_ERROR,
            onSuccess: constants.GET_OPERATOR_PROFILE_SUCCESS,
        },
        withoutLoadingStart: true
    }
};
