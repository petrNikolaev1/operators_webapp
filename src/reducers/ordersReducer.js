import fakeOrders from '@/util/fakeOrders.js'

const initialState = {
    orders: fakeOrders
};

export function ordersReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}