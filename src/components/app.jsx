import React, { Component } from 'react';
import { TitleBarComponent } from './titleBar/index';
import ReceiptOutputComponent from './receiptOutput';
import ServiceDisconectedModal from './serviceDisconectedModal';
import LineDisplay from './lineDisplay';


export class App extends Component {
  render() {
    return (
      <div>
        <TitleBarComponent />
        <LineDisplay />
        <ReceiptOutputComponent />
        <ServiceDisconectedModal />
      </div>
    )
  }
}

export default App;
