import {
    WEBSOCKET_CLOSED,
    WEBSOCKET_CONNECT,
    WEBSOCKET_DISCONNECT,
    WEBSOCKET_BEGIN_RECONNECT,
    WEBSOCKET_MESSAGE,
    WEBSOCKET_OPEN,
    WEBSOCKET_SEND,
    WEBSOCKET_ERROR
  } from '@giantmachines/redux-websocket';
  
  const WEBSOCKET_PREFIX = 'REDUX_WEBSOCKET';

  export const REDUX_WEBSOCKET_OPEN = `${WEBSOCKET_PREFIX}::${WEBSOCKET_OPEN}`;
  export const REDUX_WEBSOCKET_CLOSED = `${WEBSOCKET_PREFIX}::${WEBSOCKET_CLOSED}`;
  export const REDUX_WEBSOCKET_MESSAGE = `${WEBSOCKET_PREFIX}::${WEBSOCKET_MESSAGE}`;
  export const REDUX_WEBSOCKET_CONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_CONNECT}`;
  export const REDUX_WEBSOCKET_DISCONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_DISCONNECT}`;
  export const REDUX_WEBSOCKET_SEND = `${WEBSOCKET_PREFIX}::${WEBSOCKET_SEND}`;
  export const REDUX_WEBSOCKET_ERROR = `${WEBSOCKET_PREFIX}::${WEBSOCKET_ERROR}`;
  export const REDUX_WEBSOCKET_BEGIN_RECONNECT = `${WEBSOCKET_PREFIX}::${WEBSOCKET_BEGIN_RECONNECT}`;