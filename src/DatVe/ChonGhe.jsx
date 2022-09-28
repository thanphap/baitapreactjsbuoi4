import React, { Component } from 'react'

import { connect } from 'react-redux'

class ChonGhe extends Component {
    renderTicket = () => {
        let tongTien = 0;
        return <tbody>
            {this.props.datVe.map((ve) => {
                tongTien += ve.gia;
                return <tr key={`ticket-${ve.soGhe}`} className='text-warning'>
                    <td>{ve.soGhe}</td>
                    <td>{ve.gia}</td>
                    <td><button onClick={() => {
                        let action = {
                            type: "XOA_GHE",
                            veXoa: ve.soGhe
                        }
                        this.props.dispatch(action);
                    }} className='bg-transparent text-danger border-0'>X</button></td>
                </tr>
            })}
            <tr>
                <td className='text-white'>Tổng tiền</td>
                <td className='text-warning'>{tongTien}</td>
                <td></td>
            </tr>
        </tbody>
    }

    render() {
        console.log(this.props);
        return (
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-white'>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                {this.renderTicket()}
            </table>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        datVe: rootReducer.datVeReducer
    }
}

export default connect(mapStateToProps)(ChonGhe);
