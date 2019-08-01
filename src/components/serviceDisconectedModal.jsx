import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { getTranslate } from 'react-localize-redux';

export class ServiceDisconectedModal extends Component {

    render() {
        return (
            <div>
                <Dialog open={!this.props.webserviceDisconnected && !this.props.isFirstCallToWebservice}>
                    <DialogTitle>Service Disconnected!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.Translate('disconnectWarningText')}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    webserviceDisconnected: state.main.connectedToSimulatorService,
    isFirstCallToWebservice: state.main.initialApplicationState,
    Translate: getTranslate(state.localize)
});

export default connect(mapStateToProps)(ServiceDisconectedModal)
