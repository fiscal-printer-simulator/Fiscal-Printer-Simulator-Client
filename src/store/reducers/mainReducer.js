import {
    REDUX_WEBSOCKET_ERROR,
    REDUX_WEBSOCKET_CONNECT,
    REDUX_WEBSOCKET_OPEN,
    REDUX_WEBSOCKET_CLOSED
} from '../actions/reduxWebsocketCoreActions';

import {
    RECEIVED_AVALIBLE_COM_PORTS,
    CONNECT_TO_COM_PORT_FAILED,
    CONNECT_TO_COM_PORT_SUCCESS,
    DISCONNECT_FROM_COM_FAILED,
    DISCONNECT_FROM_COM_SUCCESS,
    ACTUAL_FISCAL_PRINTER_SIMULATOR_STATE,
    RECEIVE_RECIPT_DATA
} from '../actions/fiscalPrinterServerReceivedActions';

import {
    CHANGE_SELECTED_COM_PORT,
    CUT_THE_RECEIPT
} from '../actions/fiscalPrinterServerCreatedActions';

import calculateLine from '../../utils/createPaddingTextLine';

const initialText = (receiptWidth) => {
    return [
        calculateLine(receiptWidth, '-'),
        calculateLine(receiptWidth, ' ', 'Here will appear output receipt text.'),
        calculateLine(receiptWidth, ' ', 'Click the button to remove this text.'),
        calculateLine(receiptWidth, '-'),
    ].join('\n');
}

const initialmain = {
    initialApplicationmain: true,
    connectedToSimulatorService: false,
    connectedToFiscalPrinter: false,
    receiptText: initialText(41),
    portName: '',
    avalibleCOMPorts: []
};

const mainReducer = (main = initialmain, action) => {

    switch (action.type) {
        case REDUX_WEBSOCKET_CONNECT:
            return {
                ...main, initialApplicationmain: false
            };

        case REDUX_WEBSOCKET_OPEN:
            return {
                ...main,
                connectedToSimulatorService: true,
                connectedToFiscalPrinter: true
            };

        case REDUX_WEBSOCKET_CLOSED:
            return {
                ...main,
                connectedToSimulatorService: false,
                connectedToFiscalPrinter: false
            };

        case CUT_THE_RECEIPT:
            return {
                ...main,
                receiptText: ''
            };

        case CHANGE_SELECTED_COM_PORT:
            return {
                ...main,
                portName: action.payload.portName
            };

        case RECEIVED_AVALIBLE_COM_PORTS:
            return {
                ...main,
                avalibleCOMPorts: action.payload.avalibleCOMPorts
            };

        case CONNECT_TO_COM_PORT_SUCCESS:
        case DISCONNECT_FROM_COM_FAILED:
            return {
                ...main,
                connectedToFiscalPrinter: true
            };

        case REDUX_WEBSOCKET_ERROR:
        case CONNECT_TO_COM_PORT_FAILED:
        case DISCONNECT_FROM_COM_SUCCESS:
            return {
                ...main,
                connectedToFiscalPrinter: false
            };

        case ACTUAL_FISCAL_PRINTER_SIMULATOR_STATE:
            return {
                ...main,
                connectedToFiscalPrinter: action.payload.ConnectedToCom,
                portName: action.payload.ConnectedPortName
            }

        case RECEIVE_RECIPT_DATA:
            return {
                ...main,
                receiptText: main.receiptText + "\n" + action.payload.receiptText
            };

        default:
            return main;
    }
}

export default mainReducer;