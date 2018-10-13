import constants from '@/constants'
import {drivers} from "@/util/fakeMarkers"
import {getRoute, getGoogleMaps} from "@/util/googleMapsRequests";

export const selectRoute = (route) => {
    return dispatch => {
        dispatch({
            type: constants.SELECT_ROUTE,
            payload: route
        });
    }
};

export const resetRoute = () => {
    return dispatch => {
        dispatch({
            type: constants.RESET_ROUTE,
        });
    }
};

export const showConfirm = () => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_LOADING
        });
        setTimeout(() => {
            dispatch({
                type: constants.HIDE_LOADING
            });
            // dispatch({
            //     type: constants.HIDE_SELECT_ROUTE,
            // });
            dispatch({
                type: constants.HIDE_ORDER_MODAL,
            });
            dispatch({
                type: constants.SHOW_CONFIRM
            });
        }, 2000)
    }
};

export const hideConfirm = () => {
    return dispatch => {
        dispatch({
            type: constants.HIDE_CONFIRM,
        });
        dispatch({
            type: constants.HIDE_SELECT_ROUTE,
        });
    }
};

export const getProposedRoute = (payload) => {
    const {orderId, origin, destination} = payload;
    return async dispatch => {
        const google = await getGoogleMaps();
        dispatch({
            type: constants.GET_PROPOSED_ROUTE_REQUEST,
            orderId,
        });
        getRoute(google, {origin, destination})
            .then(res => {
                dispatch({
                    type: constants.GET_PROPOSED_ROUTE_SUCCESS,
                    res,
                    orderId,
                });
            })
            .catch(err => {
                dispatch({
                    type: constants.GET_PROPOSED_ROUTE_ERROR,
                    err,
                    orderId,
                });
            })
    }
};

export const getDriversRoutes = (payload = {drivers}) => {
    const {drivers} = payload;
    return async dispatch => {
        dispatch({
            type: constants.GET_DRIVERS_ROUTES_REQUEST,
        });
        const google = await getGoogleMaps();
        Promise.all(
            drivers.map(driver => getRoute(google, {origin: driver.origin, destination: driver.destination}))
        )
            .then(res => {
                dispatch({
                    type: constants.GET_DRIVERS_ROUTES_SUCCESS,
                    res: res.map((driverRoute, index) => ({...drivers[index], route: driverRoute})),
                });
            })
            .catch(err => {
                dispatch({
                    type: constants.GET_DRIVERS_ROUTES_ERROR,
                    err,
                });
            })
    }
};
