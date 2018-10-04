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
            type: constants.HIDE_ORDER_MODAL
        });
    }
};