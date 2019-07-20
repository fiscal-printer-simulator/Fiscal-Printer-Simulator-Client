import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { CreateCutReceiptAction } from '../store/actions/fiscalPrinterServerCreatedActions';
import { Button, Grid } from '@material-ui/core';
import { getTranslate } from 'react-localize-redux';



export class ReceiptOutput extends Component {

    static propTypes = {
        receiptOutputText: PropTypes.string.isRequired,
        Translate: PropTypes.func.isRequired,
        CutReceipt: PropTypes.func.isRequired
    }


    render() {
        return (
            <Grid container>
                <Grid item xs={10}>
                    <Grid item xs={11}>
                        <div className="fiscal-device receipt-output">{this.props.receiptOutputText}</div>
                    </Grid>
                    <Grid item xs={11}>
                        <Button
                            color="secondary"
                            variant="contained"
                            className="cut-receipt-btn"
                            onClick={this.props.CutReceipt}
                        >
                            {this.props.Translate('cutTheReceiptBtn')}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}

const mapStateToProps = (state) => ({
    receiptOutputText: state.main.receiptText,
    Translate: getTranslate(state.localize)
});

const mapDispatchToProps = dispatch => ({
    CutReceipt: () => { dispatch(CreateCutReceiptAction()) }
});


export default connect(mapStateToProps, mapDispatchToProps)(ReceiptOutput);