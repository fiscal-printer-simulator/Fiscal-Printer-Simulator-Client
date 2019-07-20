import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';

export class ServiceDisconectedModal extends Component {

    render() {
        return (
            <div>
                <Dialog open={!this.props.webserviceDisconnected && !this.props.isFirstCallToWebservice}>
                    <DialogTitle>Service Disconnected!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please make sure that the service works.<br />
                            The application will connect to it automatically.
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    webserviceDisconnected: state.main.connectedToSimulatorService,
    isFirstCallToWebservice: state.main.initialApplicationState
});

export default connect(mapStateToProps)(ServiceDisconectedModal)
