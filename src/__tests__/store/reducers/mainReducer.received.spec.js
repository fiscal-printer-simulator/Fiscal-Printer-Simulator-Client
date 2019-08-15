import mainReducer from '../../../store/reducers/mainReducer';
import {
    ACTUAL_FISCAL_PRINTER_SIMULATOR_STATE,
    ACTUAL_TRANSLATION_FOR_SIMULATOR_CLIENT,
    CONNECT_TO_COM_PORT_FAILED,
    CONNECT_TO_COM_PORT_SUCCESS,
    DISCONNECT_FROM_COM_FAILED,
    DISCONNECT_FROM_COM_SUCCESS,
    RECEIVED_AVALIBLE_COM_PORTS,
    RECEIVE_RECIPT_DATA,
    RECEIVE_LINE_DISPLAY_FIRST_LINE_DATA,
    RECEIVE_LINE_DISPLAY_SECOND_LINE_DATA
} from '../../../store/actions/fiscalPrinterServerReceivedActions';

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

describe('main reducer - received actions from FP Simulator Service', () => {

    it('should handle  ACTUAL_FISCAL_PRINTER_SIMULATOR_STATE Action', () => {
        let actionObject = {
            type: ACTUAL_FISCAL_PRINTER_SIMULATOR_STATE,
            payload:{
                ConnectedToCom: true,
                ConnectedPortName: 'COM12'
            }
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToFiscalPrinter: true,
            portName: 'COM12'
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  ACTUAL_TRANSLATION_FOR_SIMULATOR_CLIENT Action - do nothing translation reducer action', () => {
        let actionObject = { type: ACTUAL_TRANSLATION_FOR_SIMULATOR_CLIENT };
        let expectedResult = { ...expectedInitialState };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    it('should handle  CONNECT_TO_COM_PORT_FAILED Action', () => {
        let actionObject = {
            type: CONNECT_TO_COM_PORT_FAILED
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToFiscalPrinter: false
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    it('should handle  CONNECT_TO_COM_PORT_SUCCESS Action', () => {
        let actionObject = {
            type: CONNECT_TO_COM_PORT_SUCCESS
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToFiscalPrinter: true
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    it('should handle  DISCONNECT_FROM_COM_FAILED Action', () => {
        let actionObject = {
            type: DISCONNECT_FROM_COM_FAILED
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToFiscalPrinter: true
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    it('should handle  DISCONNECT_FROM_COM_SUCCESS Action', () => {
        let actionObject = {
            type: DISCONNECT_FROM_COM_SUCCESS
        };
        let expectedResult = {
            ...expectedInitialState,
            connectedToFiscalPrinter: false
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    it('should handle  RECEIVED_AVALIBLE_COM_PORTS Action', () => {
        let expectedAvalibleComPorts = ['COM1','COM2','C O M  1 2 3'];
        let actionObject = {
            type: RECEIVED_AVALIBLE_COM_PORTS,
            payload:{
                avalibleCOMPorts: expectedAvalibleComPorts
            }
        };
        let expectedResult = {
            ...expectedInitialState,
            avalibleCOMPorts:expectedAvalibleComPorts
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });

    it('should handle  RECEIVE_RECIPT_DATA Action', () => {
        let payloadReceiptText = 'TEST TEXT \nTEST 123!';
        let initialText = 'SAMPLE TEXT';
        let expectedText = initialText + '\n' + payloadReceiptText;
        
        let initialState = {
            ...expectedInitialState,
            receiptText: initialText
        }
        
        let actionObject = {
            type: RECEIVE_RECIPT_DATA,
            payload:{
                receiptText: payloadReceiptText
            }
        };
        let expectedResult = {
            ...expectedInitialState,
            receiptText: expectedText
        };

        expect(mainReducer(initialState, actionObject)).toEqual(expectedResult);
    });


    it('should handle  RECEIVE_LINE_DISPLAY_FIRST_LINE_DATA Action', () => {
        let firstLineMessage = 'Some text for first line in line display';
        let actionObject = {
            type: RECEIVE_LINE_DISPLAY_FIRST_LINE_DATA,
            payload:{
                lineDisplayOutputLineText: firstLineMessage
            }
        };
        let expectedResult = {
            ...expectedInitialState,
            lineDisplayOutputFirstLineText: firstLineMessage
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
    it('should handle  RECEIVE_LINE_DISPLAY_SECOND_LINE_DATA Action', () => {
        let secondLineMessage = 'Some text for second line in line display';
        let actionObject = {
            type: RECEIVE_LINE_DISPLAY_SECOND_LINE_DATA,
            payload:{
                lineDisplayOutputLineText: secondLineMessage
            }
        };
        let expectedResult = {
            ...expectedInitialState,
            lineDisplayOutputSecondLineText: secondLineMessage
        };

        expect(mainReducer(undefined, actionObject)).toEqual(expectedResult);
    });
});1