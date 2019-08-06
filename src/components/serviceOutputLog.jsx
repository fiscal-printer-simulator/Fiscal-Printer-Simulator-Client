import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ServiceOutputLog extends Component {
    static propTypes = {
        outputLogText: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="output-log">
                <h2>Output Log</h2>
                <div className="fiscal-device">{this.props.outputLogText}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    outputLogText: state.main.outputLogText
});

export default connect(mapStateToProps)(ServiceOutputLog
)
