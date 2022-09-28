import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ghe from './Ghe'

class DanhSachGhe extends Component {
  renderChairList = () => {
    return this.props.chairList.map((chairs) => {
      return <tr key={chairs.hang}>
        <th className='firstChar'>{chairs.hang}</th>
        {chairs.danhSachGhe.map((chair) => {
          if (chairs.hang === "") {
            return <th key={chair.soGhe} className='rowNumber'>{chair.soGhe}</th>
          } else {
            return <th key={chair.soGhe}><Ghe chair={chair}/></th> 
          }
        })}
      </tr>
    })
  }
  render() {
    return (
      <div>
        <table className='mx-auto'>
          <tbody>
            {this.renderChairList()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    chairList: rootReducer.danhSachReducer
  }
}

export default connect(mapStateToProps)(DanhSachGhe);