export const CUT_THE_RECEIPT = 'CUT_THE_RECIPT';
export const CONNECT_TO_COM_PORT = 'CONNECT_TO_COM_PORT';
export const DISCONNECT_FROM_COM = 'DISCONNECT_FROM_COM';
export const CHANGE_SELECTED_COM_PORT = 'CHANGE_SELECTED_COM_PORT';
export const OUTPUT_LOG_RECEIVED = 'OUTPUT_LOG_RECEIVED';


export const ChangeSelectedCOMPort = (portName) => {
    return {
        type: CHANGE_SELECTED_COM_PORT,
        payload: {
            portName: portName
        }
    }
}
export const TryDisconnectFromCOMAction = () => {
    return {
        type: DISCONNECT_FROM_COM,
        payload:{
        }
    }
}
export const TryConnectToComAction = (portName) => {
    return {
        type: CONNECT_TO_COM_PORT,
        payload: {
            portName: portName
        }
    }
}
export const CreateCutReceiptAction = () => {
    return {
        type: CUT_THE_RECEIPT,
        payload: {}
    };
}


export const CreateOutputLogAction = (logText,logDate) => {
    return  {
        type: OUTPUT_LOG_RECEIVED,
        payload: { logDate,logText }
    }
}
