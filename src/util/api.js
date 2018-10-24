import constants from '@/constants'


export const statuses = [
    constants.PENDING_CONFIRMATION,
    constants.IN_PROGRESS,
    constants.DELIVERED,
    constants.REJECTED,
];

export const mapStatusToNum = status => statuses.indexOf(status);

export const optimalDriversToOptions = (drivers) => {
    return drivers
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
            onSuccess: constants.LOGIN_SUCCESS
        }
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
    }
};
