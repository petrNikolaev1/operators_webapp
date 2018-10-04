import {combineReducers} from 'redux'

import * as StringReducer from './stringReducer';
import * as OrdersReducer from './ordersReducer';
import * as ViewReducer from './viewReducer';

export default combineReducers(Object.assign(
    StringReducer,
    OrdersReducer,
    ViewReducer
));