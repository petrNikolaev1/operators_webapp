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

export const showSelectRoute = (id) => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_SELECT_ROUTE,
            payload: id
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

export const showLogin = (id) => {
    return dispatch => {
        dispatch({
            type: constants.SHOW_LOGIN,
        });
    }
};

export const hideLogin = (login, password) => {
    return dispatch => {
        let fail = 0;
        if (login === "" || password === "") {
            fail = 1;
            dispatch({
                type: constants.FAIL,
                fail
            });
        }
        else {
            dispatch({
                type: constants.SHOW_LOADING
            });
            setTimeout(() => {
                dispatch({
                    type: constants.HIDE_LOADING
                });
                if (login === "admin" && password === "admin")
                    dispatch({
                        type: constants.HIDE_LOGIN
                    });
                else {
                    fail = 2;
                    dispatch({
                        type: constants.FAIL,
                        fail
                    });
                }
            }, 2000)
        }
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