import serializeError from 'serialize-error';

import {serverRequest} from "@/util/serverRequests";
import constants from '@/constants'
import api from '@/util/api'

export const apiReq = (command, params, actions) => {
    const payload = api(command, params);
    const {defaultSuccessHandler, customSuccessHandler, defaultErrorHandler, customErrorHandler, withoutLoading} = payload;
    const {onRequest, onSuccess, onError} = payload.events;
    return (dispatch) => {
        dispatch({
            type: onRequest,
            isLoaded: false,
        });

        !withoutLoading && dispatch({
            type: constants.SHOW_LOADING
        });

        const handleError = (err, where) => {
            !!defaultErrorHandler && dispatch({type: constants.SHOW_ERROR, payload: defaultErrorHandler});
            !!customErrorHandler && customErrorHandler(err, actions);

            console.error(`При выполнении команды ${payload.command} возникла ошибка на ${where}е:\n` + (err.stack || err));

            dispatch({
                type: onError,
                error: serializeError(err),
            })
        };

        serverRequest(payload)
            .then(res => {
                console.log('Response', res);

                !withoutLoading && dispatch({
                    type: constants.HIDE_LOADING
                });

                if (!res.error) {
                    !!defaultSuccessHandler && dispatch({type: constants.SHOW_SUCCESS, payload: defaultSuccessHandler});
                    !!customSuccessHandler && customSuccessHandler(res.result, actions);

                    dispatch({
                        type: onSuccess,
                        result: res.result,
                    })
                }
                else {
                    handleError(!!res.error.errors ? res.error.errors.reduce((res, cur) => res.length > 0 ? res + ', ' + cur : res + cur, '') : res.error, 'сервер')
                }
            })
            .catch(err => {
                !withoutLoading && dispatch({
                    type: constants.HIDE_LOADING
                });
                handleError(err, 'клиент')
            })
    }
};


export const logout = () => dispatch => {
    dispatch({
        type: constants.LOGOUT,
    });
};

export const selectOptimalDriver = (selectedOptimalDriver) => dispatch => {
    dispatch({
        type: constants.SELECT_OPTIMAL_DRIVER,
        selectedOptimalDriver,
    })
};

export const resetOrderApproveInfo = () => dispatch => {
    dispatch({type: constants.RESET_ROUTE});
    dispatch({type: constants.RESET_OPTIMAL_DRIVER})
};
