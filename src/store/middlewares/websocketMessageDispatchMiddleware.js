import { REDUX_WEBSOCKET_MESSAGE } from '../actions/reduxWebsocketCoreActions'

export const websocketMessageDispatchMiddleware = store => next => action => {

    if (action.type === REDUX_WEBSOCKET_MESSAGE &&
        action.payload &&
        action.payload.message &&
        IsJSONFormattedString(action.payload.message)
    ) {
        const websocketAction = JSON.parse(action.payload.message);
        return next(websocketAction);
    }
    else {
        return next(action);
    }
}

const IsJSONFormattedString = (jsonText) => {
    try{
        JSON.parse(jsonText);
    }
    catch{
        return false;
    }
    return true;
}