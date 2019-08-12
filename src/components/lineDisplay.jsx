import React from 'react'
import { connect } from 'react-redux'

const LineDisplay = ({lineDisplayOutputText}) => {
    return( <div className="fiscal-device line-display">{lineDisplayOutputText}</div>);
}

const mapStateToProps = (state) => ({
    lineDisplayOutputText: state.main.lineDisplayOutputLineText + '\n' + state.main.lineDisplayOutputLineText
});

export default connect(mapStateToProps)(LineDisplay)
