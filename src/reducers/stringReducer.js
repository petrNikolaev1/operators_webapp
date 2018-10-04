import constants from '@/constants'
import {selectedOptionToLang} from "@/util/lang.js";
const initialState = {
    language: 'en'
};

export function stringReducer(state = initialState, action) {
    switch (action.type) {
        case constants.CHANGE_LANG:
            return {
                ...state,
                language: selectedOptionToLang(action.language)
            };
        default:
            return state;
    }
}