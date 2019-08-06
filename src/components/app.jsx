import React, { Component } from 'react';
import { TitleBarComponent } from './titleBar/index';
import ReceiptOutputComponent from './receiptOutput';
import ServiceDisconectedModal from './serviceDisconectedModal';
import LineDisplay from './lineDisplay';
import ServiceOutputLog from './serviceOutputLog';
import { Grid } from '@material-ui/core';

export class App extends Component {
  render() {
    return (
      <div>
        <TitleBarComponent />
        <LineDisplay />
        <Grid container>
          <Grid item xs={6}>
            <ReceiptOutputComponent />
          </Grid>
          <Grid item xs={6}>
            <ServiceOutputLog />
          </Grid>
        </Grid>
        <ServiceDisconectedModal />
      </div>
    )
  }
}

export default App;
