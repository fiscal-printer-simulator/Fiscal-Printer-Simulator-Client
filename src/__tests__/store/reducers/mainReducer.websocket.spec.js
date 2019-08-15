import mainReducer from '../../../store/reducers/mainReducer';
import {
    REDUX_WEBSOCKET_CONNECT,
    REDUX_WEBSOCKET_OPEN,
    REDUX_WEBSOCKET_CLOSED,
    REDUX_WEBSOCKET_ERROR,
    REDUX_WEBSOCKET_BEGIN_RECONNECT,
    REDUX_WEBSOCKET_DISCONNECT,
    REDUX_WEBSOCKET_MESSAGE,
    REDUX_WEBSOCKET_SEND
}
from '../../../store/actions/reduxWebsocketCoreActions';

const expectedInitialState = {
    initialApplicationmain: true,
    connectedToSimulatorService: false,
    connectedToFiscalPrinter: false,
    receiptText:
        '-----------------------------------------\n' +
        '  Here will appear output receipt text.  \n' +
        '  Click the button to remove this text.  \n' +
        '-----------------------------------------',
    portName: '',
    avalibleCOMPorts: [],
    lineDisplayOutputFirstLineText: "----- Do zapłaty ------",
    lineDisplayOutputSecondLineText: "Suma:              0,00",
    outputLogText: ""
}

describe('main reducer - websocket library actions', () => {

    it('should handle  REDUX_WEBSOCKET_CONNECT Action', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_CONNECT,
            payload: {}
        };
        let expectedResult = { ...expectedInitialState, initialApplicationmain: false };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  REDUX_WEBSOCKET_OPEN Action', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_OPEN,
            payload: {}
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToSimulatorService: true,
            connectedToFiscalPrinter: true
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  REDUX_WEBSOCKET_CLOSED Action', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_CLOSED,
            payload: {}
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToSimulatorService: false,
            connectedToFiscalPrinter: false
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  REDUX_WEBSOCKET_ERROR Action', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_ERROR,
            payload: {}
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToFiscalPrinter: false
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle REDUX_WEBSOCKET_BEGIN_RECONNECT Action - do nothing', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_BEGIN_RECONNECT,
            payload: {}
        };
        let expectedResult = {...expectedInitialState,};

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle REDUX_WEBSOCKET_DISCONNECT Action - do nothing', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_DISCONNECT,
            payload: {}
        };
        let expectedResult = {...expectedInitialState,};

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    
    it('should handle REDUX_WEBSOCKET_MESSAGE Action - do nothing', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_MESSAGE,
            payload: {}
        };
        let expectedResult = {...expectedInitialState,};

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle REDUX_WEBSOCKET_SEND Action - do nothing', () => {
        let actionObject = {
            type: REDUX_WEBSOCKET_SEND,
            payload: {}
        };
        let expectedResult = {...expectedInitialState,};

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    
});