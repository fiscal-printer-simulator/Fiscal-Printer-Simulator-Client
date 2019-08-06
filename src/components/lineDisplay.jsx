import React from 'react'
import { connect } from 'react-redux'

const LineDisplay = ({lineDisplayOutputText}) => {
    return( <div className="fiscal-device line-display">{lineDisplayOutputText}</div>);
}

const mapStateToProps = (state) => ({
    lineDisplayOutputText: state.main.lineDisplayFirstLineText + '\n' + state.main.lineDisplaySecondLineText
});

export default connect(mapStateToProps)(LineDisplay)
