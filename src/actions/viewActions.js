import constants from '@/constants'

export const showOrderModal = orderId => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_ORDER_MODAL,
            orderId
        });
    }
};

export const hideOrderModal = () => {
    return dispatch => {
        dispatch({
            type: constants.HIDE_ORDER_MODAL,
        });
    }
};

export const showSelectRoute = orderId => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_SELECT_ROUTE,
            orderId
        });
    }
};

export const hideSelectRoute = () => {
    return dispatch => {
        dispatch({
            type: constants.HIDE_SELECT_ROUTE,
        });
    }
};

export const showSelectDrivers = orderId => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_DRIVERS,
            orderId
        });
    }
};

export const hideDrivers = () => {
    return dispatch => {
        dispatch({
            type: constants.HIDE_DRIVERS,
        });
    }
};

export const showLoading = (id) => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_LOADING
        });
    }
};

export const hideLoading = () => {
    return dispatch => {
        dispatch({
            type: constants.HIDE_LOADING
        });
    }
};
