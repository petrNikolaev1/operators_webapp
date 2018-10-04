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
            type: constants.SHOW_LOADING
        });
        setTimeout(() => {
            dispatch({
                type: constants.HIDE_LOADING
            });
            dispatch({
                type: constants.HIDE_LOGIN
            })
        }, 2000)
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