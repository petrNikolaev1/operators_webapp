import constants from '@/constants'
import {drivers} from "@/util/fakeMarkers"
import {getRoute, getGoogleMaps} from "@/util/googleMapsRequests";
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
    console.log('BEFORE')
    return dispatch => {
        console.log('ACTION', payload)
        dispatch({
            type: constants.ASSIGN_TIMER_TO_DRIVER,
            ...payload
        })
    }
};

export const getDriversRoutes = (payload = {drivers: drivers.slice(2, 3)}) => {
    const {drivers} = payload;
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
                        console.log(driverRoute.routes[0].legs[0].steps)
                        const pathOriginal = driverRoute.routes[0].legs[0].steps.reduce((res, cur) => res.concat(cur.path), []);
                        drivers[index].pathOriginal = pathOriginal.map(item => ({lat: item.lat(), lng: item.lng()}));
                        return splitPath(pathOriginal.map(item => [item.lat(), item.lng()]))
                    }))
            })
            .then(res => {
                console.log('LOADED', res)
                dispatch({
                    type: constants.GET_DRIVERS_ROUTES_SUCCESS,
                    res: res.map((path, index) => ({...drivers[index], path}))
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
