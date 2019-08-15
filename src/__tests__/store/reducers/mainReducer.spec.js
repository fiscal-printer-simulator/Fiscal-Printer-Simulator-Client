import mainReducer from '../../../store/reducers/mainReducer';

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

describe('main reducer - default reducer behavior', () => {

    it('should return initial state', () => {
        expect(mainReducer(undefined, {})).toEqual(expectedInitialState);
    });

});
