import constants from '@/constants'
import {drivers} from "@/util/fakeMarkers"
import {getRoute, getGoogleMaps, getEnd, getStart} from "@/util/googleMapsRequests";
import {splitPath} from "../util/serverRequests";
import React from "react";

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
        getRoute(google, {origin, destination, provideRouteAlternatives: true})
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

export const assignTimerToDriver = (payload) => {
    return dispatch => {
        dispatch({
            type: constants.ASSIGN_TIMER_TO_DRIVER,
            ...payload
        })
    }
};

export const homeSelectDriver = (payload) => {
    if (!payload || (payload instanceof Array && !payload.length)) return;
    return dispatch => {
        console.log('ACTION', payload)
        dispatch({
            type: constants.HOME_SELECT_DRIVER,
            payload
        })
    }
};

export const getDriversRoutes = (payload = {drivers: drivers}) => {
    let {drivers} = payload;
    return async (dispatch, getState) => {

        const state = getState();
        const {loaded} = state.homeMapReducer.drivers;
        if (loaded || loaded === false) return;

        dispatch({
            type: constants.GET_DRIVERS_ROUTES_REQUEST,
        });

        const google = await getGoogleMaps();
        Promise.all(
            drivers
                .map(driver => getRoute(google, {
                    origin: driver.origin,
                    destination: driver.destination
                }))
        )
            .then(res => {
                return Promise.all(
                    res.map((driverRoute, index) => {
                        const pathOriginal = driverRoute.routes[0].legs[0].steps.reduce((res, cur) => res.concat(cur.path), []);
                        drivers = drivers.map((driver, i) => i !== index ? driver :
                            {
                                ...driver,
                                pathOriginal: pathOriginal.map(item => ({lat: item.lat(), lng: item.lng()})),
                                distance: driverRoute.routes[0].legs[0].distance.value,
                                duration: driverRoute.routes[0].legs[0].duration.value
                            }
                        );
                        return splitPath(pathOriginal.map(item => [item.lat(), item.lng()]))
                    }))
            })
            .then(res => {
                dispatch({
                    type: constants.GET_DRIVERS_ROUTES_SUCCESS,
                    res: res.map((path, index) => ({
                        ...drivers[index],
                        path,
                        progress: {percent: 0, pathLength: path.length, stepWeight: (1.0 / path.length) * 100.0}
                    }))
                })
            })
            .catch(err => {
                dispatch({
                    type: constants.GET_DRIVERS_ROUTES_ERROR,
                    err,
                });
            })
    }
};

export const getVehiclesRoutes = (vehicles) => {
    return async (dispatch) => {
        dispatch({type: constants.GET_VEHICLES_ROUTES_REQUEST});
        const google = await getGoogleMaps();

        let vehiclesWithTasks = vehicles
            .filter(vehicle => !!vehicle.task);

        let vehiclesWithoutTasks = vehicles
            .filter(vehicle => !vehicle.task);

        Promise.all(
            vehiclesWithTasks
                .map(driver => {
                    const {order} = driver.task;

                    return getRoute(google, {
                        origin: getStart(order),
                        destination: getEnd(order)
                    })
                })
        )
            .then(res => {
                vehiclesWithTasks = vehiclesWithTasks.map((vehicle, index) => {
                    const {routeId} = vehicle.task;

                    const leg = res[index].routes[routeId || 0].legs[0];
                    const {distance, duration, steps} = leg;

                    return ({
                        ...vehicle,
                        task: {
                            ...vehicle.task,
                            distanceTotal: distance.value,
                            durationTotal: duration.value,
                            path: steps.reduce((res, cur) => res.concat(cur.path), []),
                        },
                    })
                });

                dispatch({
                    type: constants.GET_VEHICLES_ROUTES_SUCCESS,
                    res: vehiclesWithoutTasks.concat(vehiclesWithTasks),
                })
            })
            .catch(err => {
                dispatch({
                    type: constants.GET_VEHICLES_ROUTES_ERROR,
                    err,
                });
            })
    }
};

