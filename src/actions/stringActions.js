import constants from '@/constants'

export const changeLang = (language) => {
    return dispatch => {
        dispatch({
            type: constants.CHANGE_LANG,
            language,
        });
    }
};