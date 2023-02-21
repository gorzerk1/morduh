import React from 'react'


function OrderType(){
  return (
    <div className='orderType--body'>
      <img className='orderType--body__image' src="../../../backgroundAbout2.png" alt="" />
        <div className='orderType--container'>
          <div className='orderType--button'>
            <img className='orderType--img' src="../../../order/motor.png" alt="" />
            <div className='orderType--text'>משלוח</div>
          </div>
          <div className='orderType--button'>
            <img className='orderType--img'  src="../../../order/takeaway.png" alt="" />
            <div className='orderType--text'>איסוף עצמי</div>
          </div>
        </div>
    </div>
  )
}

export default OrderType