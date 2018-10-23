import constants from '@/constants'

export const fullOrderProps = [
    'id',
    'fullFrom',
    'fullTo',
    'status',
    'weight',
    'worth',
    'description',
    'birthDate',
];

export const filterFullOrderProps = (orderProps) => {
    return Object.keys(orderProps)
        .filter(orderProp => {
            return fullOrderProps.includes(orderProp)
        })
        .map(orderProp => {
            return {label: orderProp, value: orderProps[orderProp]}
        })
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
