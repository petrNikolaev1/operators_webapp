import fakeOrders from '@/util/fakeOrders.js'
import constants from '@/constants'

const initialState = {
    orders: fakeOrders,
    filters: {status: [0, 1, 2]}
};

export function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FILTER:
            return {
                ...state,
                filters: action.payload
            };
        default:
            return state;
    }
}