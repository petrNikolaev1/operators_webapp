import constants from '@/constants'

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
    }
};