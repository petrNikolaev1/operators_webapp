import serializeError from 'serialize-error';

import {queryServerRequest} from "@/util/serverRequests";
import constants from '@/constants'
import api from '@/util/api'

export const apiReq = (command, params) => {
    const payload = api(command, params);

    const {onRequest, onSuccess, onError} = payload.events;
    return (dispatch) => {
        dispatch({
            type: onRequest,
            isLoaded: false,
        });
        dispatch({
            type: constants.SHOW_LOADING
        });

        queryServerRequest(payload)
            .then(res => {
                console.log('Response', res);

                dispatch({
                    type: constants.HIDE_LOADING
                });

                if (!res.error) {
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

                console.error(`При выполнении команды ${payload.command} возникла ошибка на клиенте:\n` + err);
                dispatch({
                    type: onError,
                    error: serializeError(err),
                })
            })
    }
};


export const logout = () => {
    return dispatch => {
        dispatch({
            type: constants.LOGOUT,
        });
    }
};