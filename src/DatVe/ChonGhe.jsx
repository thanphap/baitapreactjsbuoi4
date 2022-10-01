import React, { Component } from 'react'

import { connect } from 'react-redux'

class ChonGhe extends Component {
    renderTicket = () => {
        let { chairList } = this.props
        let tongTien = 0;
        return <tbody>
            {chairList.map((chairs) => {
                return chairs.danhSachGhe.map((chair) => {
                    if (chair.order) {
                        tongTien += chair.gia;
                        return <tr key={`ticket-${chair.soGhe}`} className='text-warning'>
                            <td>{chair.soGhe}</td>
                            <td>{chair.gia}</td>
                            <td><button onClick={() => {
                                let action = {
                                    type: "XOA_GHE",
                                    removeChair: chair.soGhe
                                }
                                this.props.dispatch(action);
                            }} className='bg-transparent text-danger border-0'>X</button></td>
                        </tr>
                    }
                })
            })}
            <tr>
                <td className='text-white'>Tổng tiền</td>
                <td className='text-warning'>{tongTien}</td>
                <td></td>
            </tr>
        </tbody>
    }

    render() {
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
        chairList: rootReducer.danhSachReducer
    }
}

export default connect(mapStateToProps)(ChonGhe);
