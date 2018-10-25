import serializeError from 'serialize-error';

import {serverRequest} from "@/util/serverRequests";
import constants from '@/constants'
import api from '@/util/api'

export const apiReq = (command, params) => {
    const payload = api(command, params);
    const {success} = payload;
    const {onRequest, onSuccess, onError} = payload.events;
    return (dispatch) => {
        dispatch({
            type: onRequest,
            isLoaded: false,
        });
        dispatch({
            type: constants.SHOW_LOADING
        });

        serverRequest(payload)
            .then(res => {
                console.log('Response', res);

                dispatch({
                    type: constants.HIDE_LOADING
                });

                if (!res.error) {
                    !!success && dispatch({
                        type: constants.SHOW_SUCCESS,
                        payload: success
                    });

                    dispatch({
                        type: onSuccess,
                        result: res.result,
                    })
                }
                else {
                    console.error(`При выполнении команды ${payload.command} возникла ошибка на сервере:\n` + res.error);
                    dispatch({
                        type: onError,
                        error: serializeError(res.error),
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: constants.HIDE_LOADING
                });

                console.error(`При выполнении команды ${payload.command} возникла ошибка на клиенте:\n` + err.stack);
                dispatch({
                    type: onError,
                    error: serializeError(err),
                })
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
