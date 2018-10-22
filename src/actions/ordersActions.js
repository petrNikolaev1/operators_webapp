import constants from '@/constants';

export const filterOrders = (input) => {
    return dispatch => {
        dispatch({
            type: constants.FILTER,
            payload: input
        });
    }
};
