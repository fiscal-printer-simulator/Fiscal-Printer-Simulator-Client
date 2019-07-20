import './assets/index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import mainReducer from './store/reducers/mainReducer';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { defaultFiscalPrinterEndpoint } from '../package.json';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { 
    websocketRetryConnectMiddleware,
    websocketMessageDispatchMiddleware,
    updateTranslationMiddleware
} from './store/middlewares/index';
import reduxWebsocket, { connect } from '@giantmachines/redux-websocket';
import { LocalizeProvider, localizeReducer } from "react-localize-redux";
import {languages,translation} from './assets/translations.json';


const reduxWebsocketMiddleware = reduxWebsocket();
const store = createStore(combineReducers({ localize: localizeReducer, main: mainReducer }),
    composeWithDevTools(
        applyMiddleware(reduxWebsocketMiddleware,
            websocketMessageDispatchMiddleware,
            websocketRetryConnectMiddleware,
            updateTranslationMiddleware
        )));

store.dispatch(connect(defaultFiscalPrinterEndpoint));

const defaultTranslations = { 
    languages,translation,
    options: {
        renderToStaticMarkup: false
    }
}


render(
    <Provider store={store}>
        <LocalizeProvider store={store} initialize={ defaultTranslations} >
            <App />
        </LocalizeProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
