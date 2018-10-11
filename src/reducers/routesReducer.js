import constants from '@/constants'

const initialState = {
    selectedRoute: null,
    confirmShown: 0,
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

const initialProposedRouteState = {
    proposedRoutes: {}
};

export function proposedRouteReducer(state = initialProposedRouteState, action) {
    switch (action.type) {
        case constants.GET_PROPOSED_ROUTE_REQUEST:
            return {
                ...state,
                proposedRoutes: {
                    ...state.proposedRoutes,
                    [action.orderId]: {
                        loaded: false
                    }
                }
            };
        case constants.GET_PROPOSED_ROUTE_SUCCESS:
            return {
                ...state,
                proposedRoutes: {
                    ...state.proposedRoutes,
                    [action.orderId]: {
                        res: action.res,
                        loaded: true
                    }
                }
            };
        case constants.GET_PROPOSED_ROUTE_ERROR:
            return {
                ...state,
                proposedRoutes: {
                    ...state.proposedRoutes,
                    [action.orderId]: {
                        res: action.res,
                        loaded: true
                    }
                }
            };
        default:
            return state;
    }
}

