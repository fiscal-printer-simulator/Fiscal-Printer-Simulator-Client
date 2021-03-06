import {
    CUT_THE_RECEIPT,
    CHANGE_SELECTED_COM_PORT,
    CONNECT_TO_COM_PORT,
    DISCONNECT_FROM_COM,
    OUTPUT_LOG_RECEIVED,

    CreateCutReceiptAction,
    ChangeSelectedCOMPort,
    TryConnectToComAction,
    TryDisconnectFromCOMAction,
    CreateOutputLogAction
} from '../../../store/actions/fiscalPrinterServerCreatedActions';

describe('actions created in application', () => {
    it('should create an action to cut the receipt output window', () => {
        let expectedAction = {
            type: CUT_THE_RECEIPT,
            payload: {}
        };
        expect(CreateCutReceiptAction()).toEqual(expectedAction);
    });

    it('should create an action to change selected port on Simulator', () => {
        let expectedPort = 'COM5';
        let expectedAction = {
            type: CHANGE_SELECTED_COM_PORT,
            payload: {
                portName: expectedPort
            }
        };
        expect(ChangeSelectedCOMPort(expectedPort)).toEqual(expectedAction);
    });

    it('should create an action to connect to Simulator Service', () => {
        let expectedPort = 'COM1';
        let expectedAction = {
            type: CONNECT_TO_COM_PORT,
            payload: {
                portName: expectedPort
            }
        };
        expect(TryConnectToComAction(expectedPort)).toEqual(expectedAction);
    });

    it('should create an action to disconnect from Simulator Service', () => {
        let expectedPort = 'COM1';
        let expectedAction = {
            type: DISCONNECT_FROM_COM,
            payload: {}
        };
        expect(TryDisconnectFromCOMAction()).toEqual(expectedAction);
    });

    it('should create an action to show log in log window', () => {
        let logText = 'Something was done successfully.';
        let logDate = new Date().toLocaleString();
        let expectedAction = {
            type: OUTPUT_LOG_RECEIVED,
            payload: { logText, logDate }
        };
        let result = CreateOutputLogAction(logText, logDate
        );
        expect(result).toEqual(expectedAction);
    })


});