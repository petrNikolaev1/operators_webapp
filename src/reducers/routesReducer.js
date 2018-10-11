import constants from '@/constants'

const initialState = {
    selectedRoute: null
};

export function routesReducer(state = initialState, action) {
    switch (action.type) {
        case constants.SELECT_ROUTE:
            return {...state, selectedRoute: action.payload};
        case constants.RESET_ROUTE:
            return {...state, selectedRoute: null};
        default:
            return state;
    }
}