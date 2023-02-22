import React from 'react'
import { Link } from 'react-router-dom'


function OrderType(){
  return (
    <div className='orderType--body'>
      <img className='orderType--body__image' src="../../../backgroundAbout2.png" alt="" />
        <div className='orderType--container'>
          <Link to="/order/delivery" className='orderType--button'>
            <img className='orderType--img' src="../../../order/motor.png" alt="" />
            <div className='orderType--text'>משלוח</div>
          </Link>
          <Link to="/order/takeaway" className='orderType--button'>
            <img className='orderType--img'  src="../../../order/takeaway.png" alt="" />
            <div className='orderType--text'>איסוף עצמי</div>
          </Link>
        </div>
    </div>
  )
}

export default OrderType