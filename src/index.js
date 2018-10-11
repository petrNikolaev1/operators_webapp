import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter as Router} from 'react-router-dom'

import App from '@/containers/App'
import '@/assets/styles/index.scss'
import obj from '@/store/index'

const {store, persistor} = obj();

const renderApp = Component => {
    render(
        <AppContainer>
            <Provider key={module.hot ? Date.now() : store} store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Component/>
                    </Router>
                </PersistGate>
            </Provider>
        </AppContainer>,
        document.querySelector('#mount_place')
    )
};

renderApp(App);

// Hot module replacement
if (module.hot) {
    module.hot.accept('@/containers/App', () => {
        renderApp(App)
    })
}