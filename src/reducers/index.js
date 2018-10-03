import {combineReducers} from 'redux'

import * as StringReducer from './stringReducer';

export default combineReducers(Object.assign(
    StringReducer
));