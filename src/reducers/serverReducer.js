import constants from '@/constants'

const initLoginState = {};

export function loginReducer(state = initLoginState, action) {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {...state, loaded: false};
        case constants.LOGIN_SUCCESS:
            document.cookie = `token=${action.result.auth_token}`;
            return {loaded: true, res: action.result};
        case constants.LOGOUT:
            document.cookie = ``;
            return {};
        case constants.LOGIN_ERROR:
            return {loaded: true, error: action.error};
        default:
            return state;
    }
}
