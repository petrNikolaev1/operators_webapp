/*
Redux store.
 */

import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '@/reducers/index'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loginReducer', 'ordersReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(reduxThunk));
    let persistor = persistStore(store);

    if (module.hot) {
        module.hot.accept(() => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(
                persistReducer(persistConfig, nextRootReducer)
            )
        })
    }

    return {store, persistor}
}