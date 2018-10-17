import constants from '@/constants'
import {initGoogleMaps} from "@/util/googleMapsRequests";

export const changeLang = (language) => {

    initGoogleMaps(language);

    return dispatch => {
        dispatch({
            type: constants.CHANGE_LANG,
            language,
        });
    }
};

export const changeDrivers = (language) => {

    return dispatch => {
        dispatch({
            type: constants.CHANGE_LANG,
            language,
        });
    }
};