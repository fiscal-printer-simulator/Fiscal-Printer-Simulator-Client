import {
    REDUX_WEBSOCKET_CLOSED
} from '../actions/reduxWebsocketCoreActions'
import { connect } from '@giantmachines/redux-websocket/dist';
import { defaultFiscalPrinterEndpoint } from '../../../package.json';

export const websocketRetryConnectMiddleware = store => next => action => {

    let result = next(action);

    if (action.type === REDUX_WEBSOCKET_CLOSED) {
        let result = connect(defaultFiscalPrinterEndpoint);
        //setTimeout(next(action))
        setTimeout(()=>{
            store.dispatch(result)
        }, 25000);
    }

    return result;

}
 