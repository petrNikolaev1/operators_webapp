import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import MainMenu from 'containers/MainMenu'
import 'assets/styles/index.css'
import obj from 'store/index'

const {store, persistor} = obj();

const renderApp = Component => {
    render(
        <AppContainer>
            <Provider key={module.hot ? Date.now() : store} store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component/>
                </PersistGate>
            </Provider>
        </AppContainer>,
        document.querySelector('#mount_place')
    )
};

renderApp(MainMenu);

// Hot module replacement
if (module.hot) {
    module.hot.accept('containers/MainMenu', () => {
        renderApp(MainMenu)
    })
}