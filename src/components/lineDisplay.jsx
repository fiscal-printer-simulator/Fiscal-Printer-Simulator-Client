import React from 'react'
import { connect } from 'react-redux'

const LineDisplay = ({lineDisplayOutputText}) => {
    return( <div className="fiscal-device line-display">{lineDisplayOutputText}</div>);
}

const mapStateToProps = (state) => ({
    lineDisplayOutputText: state.main.lineDisplayOutputFirstLineText + '\n' + state.main.lineDisplayOutputSecondLineText
});

export default connect(mapStateToProps)(LineDisplay)
