import constants from '@/constants'

const initialState = {
    selectedRoute: null,
    confirmShown: 0
};

export function routesReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SELECT_ROUTE:
            return {...state, selectedRoute: action.payload};
        case constants.RESET_ROUTE:
            return {...state, selectedRoute: null};
        case constants.SHOW_CONFIRM:
            return {
                ...state,
                confirmShown: 1
            };
        case constants.HIDE_CONFIRM:
            return {
                ...state,
                confirmShown: 0
            };
        default:
            return state;
    }
}