import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { send } from '@giantmachines/redux-websocket'
import { getTranslate } from 'react-localize-redux';
import {
    Grid,
    MenuItem,
    Select,
    Button,
    FormControl,
    InputLabel,
    FilledInput
} from '@material-ui/core';
import {
    TryConnectToComAction,
    ChangeSelectedCOMPort,
    TryDisconnectFromCOMAction
} from '../../store/actions/fiscalPrinterServerCreatedActions';

class SerialPortSelector extends Component {

    static propTypes = {
        avalibleCOMPorts: PropTypes.array.isRequired,
        portName: PropTypes.string.isRequired,
        connectedToFiscalPrinter: PropTypes.bool.isRequired,
        connectedToService: PropTypes.bool.isRequired,
        
        Translate: PropTypes.func.isRequired,
        TryConnectToCOM: PropTypes.func.isRequired,
        TryDisconnectFromCOM: PropTypes.func.isRequired,
        ChangePortName: PropTypes.func.isRequired
    }

    render() {
        const portNameNotSelected = (this.props.portName === "") || (this.props.portName === undefined);
        const comOptions = this.props.avalibleCOMPorts.sort().map(portNameOption => <MenuItem style={{ justifyContent: 'center' }} key={portNameOption} value={portNameOption}>{portNameOption}</MenuItem>)
        const connectButtonText = this.props.connectedToFiscalPrinter ?
            this.props.Translate('disconnectBtnLabel') :
            this.props.Translate('connectBtnLabel');
        return (
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={4}>
                    <FormControl style={{ textAlign: 'center' }} fullWidth={true} variant="filled">
                        <InputLabel htmlFor="port-name">{`⚡ ${this.props.Translate('serialPortLabel')}`}</InputLabel>
                        <Select
                            fullWidth={true}
                            value={this.props.portName}
                            disabled={!this.props.connectedToService || this.props.connectedToFiscalPrinter}
                            input={<FilledInput name="port-name" id="port-name" />}
                            onChange={this.props.ChangePortName}
                        >
                            <MenuItem value=""></MenuItem>
                            {comOptions}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={3} style={{ display: "flex", alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={() => this.props.connectedToFiscalPrinter ? this.props.TryDisconnectFromCOM() : this.props.TryConnectToCOM(this.props.portName)}
                        disabled={portNameNotSelected}
                    >
                        {connectButtonText}
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    avalibleCOMPorts: state.main.avalibleCOMPorts,
    portName: state.main.portName,
    connectedToFiscalPrinter: state.main.connectedToFiscalPrinter,
    connectedToService: state.main.connectedToSimulatorService,
    Translate: getTranslate(state.localize),
});

const mapDispatchToProps = (dispatch) => ({
    TryConnectToCOM: (portName) => dispatch(send(TryConnectToComAction(portName))),
    TryDisconnectFromCOM: () => dispatch(send(TryDisconnectFromCOMAction())),
    ChangePortName: (event) => dispatch(ChangeSelectedCOMPort(event.target.value)),
});

export const SerialPortSelectorComponent =  connect(mapStateToProps, mapDispatchToProps)(SerialPortSelector)
