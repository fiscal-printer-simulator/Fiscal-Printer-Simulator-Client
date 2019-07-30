import mainReducer from '../../../store/reducers/mainReducer';
import {
    ChangeSelectedCOMPort,
    CreateCutReceiptAction,
    TryDisconnectFromCOMAction,
    TryConnectToComAction
} from '../../../store/actions/fiscalPrinterServerCreatedActions';

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
    avalibleCOMPorts: []
}

describe('main reducer - created actions by application', () => {

    it('should handle  CHANGE_SELECTED_COM_PORT Action', () => {
        let expectedPortName = 'COM8';
        let actionObject = ChangeSelectedCOMPort(expectedPortName);
        let expectedResult = {
            ...expectedInitialState,
            portName: expectedPortName
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  CUT_THE_RECEIPT Action', () => {

        let actionObject = CreateCutReceiptAction();
        let expectedResult = {
            ...expectedInitialState,
            receiptText: ''
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  CONNECT_TO_COM_PORT Action', () => {

        let actionObject = TryConnectToComAction();
        let expectedResult = { ...expectedInitialState };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  DISCONNECT_FROM_COM Action', () => {

        let actionObject = TryDisconnectFromCOMAction();
        let expectedResult = { ...expectedInitialState };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });


});