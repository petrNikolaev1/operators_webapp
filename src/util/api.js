import constants from '@/constants'


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
        success: {
            text: 'APPROVE_SUCCESS'
        }
    },
};
