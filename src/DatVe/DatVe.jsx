import React, { Component } from 'react'
import ChonGhe from './ChonGhe'
import DanhSachGhe from './DanhSachGhe'

import "./datVe.css"

export default class DatVe extends Component {
    render() {
        return (
            <div className='container-fluid bookingMovie'>
                <div className="row">
                    <div className="col-8">
                        <h1 className='text-warning'>ĐẶT VÉ XEM PHIM</h1>
                        <p className='text-white mb-0'>Màn hình</p>
                        <div className='screen'></div>
                        <DanhSachGhe/>
                    </div>
                    <div className="col-4">
                        <h3 className='text-white my-4'>Danh sách ghế bạn chọn</h3>
                        <div className='text-left'>
                            <div><button className='gheDuocChon'></button><span className='text-white'> Ghế đã đặt</span></div>
                            <div><button className='gheDangChon'></button><span className='text-white'> Ghế bạn chọn</span></div>
                            <div><button className='ghe'></button><span className='text-white'> Ghế chưa đặt</span></div>
                        </div>
                        <ChonGhe/>
                    </div>
                </div>
            </div>
        )
    }
}
