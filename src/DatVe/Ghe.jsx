import React, { Component } from 'react'

import { connect } from 'react-redux'

class Ghe extends Component {
    render() {
        let { chair } = this.props;
        let classChange = '';
        if (chair.daDat){
            classChange = 'gheDuocChon';
        }
        else {
            classChange = chair.order ? 'gheDangChon': 'ghe'
        }
        return (
            <button onClick={() => {
                const action = {
                    type: "THEM_GHE",
                    addChair: chair
                }
                this.props.dispatch(action)
            }} className={classChange}>{chair.soGhe.slice(1)}</button>
        )
    }
}


export default connect()(Ghe)