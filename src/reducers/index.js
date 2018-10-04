import {combineReducers} from 'redux'

import * as StringReducer from './stringReducer';
import * as OrdersReducer from './ordersReducer';

export default combineReducers(Object.assign(
    StringReducer,
    OrdersReducer
));