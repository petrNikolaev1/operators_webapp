import constants from '@/constants'
import {driversToOptions} from "@/util/drivers";

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


const homeMapInitialState = {
    drivers: {},
};


export function homeMapReducer(state = homeMapInitialState, action) {
    switch (action.type) {
        case constants.GET_DRIVERS_ROUTES_REQUEST:
            return {
                ...state,
                drivers: {
                    ...state.drivers,
                    loaded: false
                },
            };
        case constants.GET_DRIVERS_ROUTES_SUCCESS:
            console.log('LOADED', action.res)
            return {
                ...state,
                drivers: {
                    ...state.drivers,
                    loaded: true,
                    res: action.res,
                    driversOptions: driversToOptions(action.res)
                }
            };
        case constants.GET_DRIVERS_ROUTES_ERROR:
            return {
                ...state,
                drivers: {
                    ...state.drivers,
                    loaded: true,
                    err: action.err,
                }
            };
        case constants.ASSIGN_TIMER_TO_DRIVER:
            return {
                ...state,
                drivers: {
                    ...state.drivers,
                    res: state.drivers.res
                        .map((driver, index) => (action.driverId !== index ? driver : {
                            ...driver,
                            lastSeen: action.lastSeen
                        }))
                }
            };
        case constants.HOME_SELECT_DRIVER:
            return {
                ...state,
                drivers: {
                    ...state.drivers,
                    selectedDriver:
                        state.drivers.selectedDriver && state.drivers.selectedDriver.value === action.driverId ? '' :
                            state.drivers.driversOptions[action.driverId]
                }
            };


        default:
            return state;
    }
}
