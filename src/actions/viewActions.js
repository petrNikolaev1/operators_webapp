import constants from '@/constants'

export const showOrderModal = (id) => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_ORDER_MODAL,
            id
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

export const showLogin = (id) => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_LOGIN,
        });
    }
};

export const hideLogin = () => {
    return dispatch => {
        dispatch({
            type: constants.HIDE_LOGIN
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