import constants from '@/constants';

export const handleStatusFilters = statusFilters => {
    return dispatch => {
        dispatch({
            type: constants.HANDLE_STATUS_FILTERS,
            statusFilters
        });
    }
};
