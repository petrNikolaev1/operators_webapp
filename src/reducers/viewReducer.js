import constants from '@/constants'

const initialState = {
    orderModalShown: 0
};

export function orderModalViewReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SHOW_ORDER_MODAL:
            return {
                ...state,
                orderModalShown: action.id
            };
        case constants.HIDE_ORDER_MODAL:
            console.log('HIDE BITCH')
            return {
                ...state,
                orderModalShown: 0
            };
        default:
            return state;
    }
}