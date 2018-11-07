import serializeError from 'serialize-error';

import constants, {MAX_TIMEOUT} from 'constants'

const abortRequests = {};

export const apiRequest = (Command, onRequest, onSuccess, onError, extra, Key = 'Info', timeout = MAX_TIMEOUT) => {
    if (Command.ForceAbort) {
        abortRequests[Command.Command].abort();
        return (dispatch) => {
            dispatch({
                type: onError,
                isLoaded: true,
                error: {name: 'AbortError'}
            })
        }
    }
    const {AbortController} = window;
    const controller = new AbortController();
    const signal = controller.signal;
    abortRequests[Command.Command] = controller;

    const abortReqTimeout = setTimeout(() => controller.abort(), timeout);

    return async (dispatch) => {
        dispatch({
            type: onRequest,
            isLoaded: false,
            extra,
        });

        if (!!Command.beforeApiReq) {
            try {
                Command[Command.beforeApiReq.param] = await Command.beforeApiReq.action();
                delete Command.beforeApiReq;
            } catch (error) {
                clearTimeout(abortReqTimeout);
                console.log(`Перед выполнением запроса ${Command.Command} возникла ошибка:\n` + error);
                return dispatch({
                    type: onError,
                    error: serializeError(error),
                    isLoaded: true,
                    extra,
                })
            }
        }

        fetch(
            window.location.origin + "/Execute/",
            // "http://localhost:5894/Execute/",
            {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(Command),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                signal,
            })
            .then(res => {
                clearTimeout(abortReqTimeout);
                return res.json()
            })
            .then(res => {
                if (res.Status === 0) {
                    dispatch({
                        type: onSuccess,
                        result: Key === constants.ALL_RES_KEYS ? res : res[Key],
                        isLoaded: true,
                        extra
                    })
                }
                else {
                    console.log(`При выполнении команды ${Command.Command} возникла ошибка:\n` + res.Error);
                    console.log('\nStack trace: ' + res.StackTrace);
                    dispatch({
                        type: onError,
                        error: res,
                        isLoaded: true,
                        extra
                    })
                }
            })
            .catch(error => {
                clearTimeout(abortReqTimeout);
                console.log(`При выполнении запроса ${Command.Command} возникла ошибка:\n` + error);
                dispatch({
                    type: onError,
                    error: serializeError(error),
                    isLoaded: true,
                    extra,
                })
            })
    }
};