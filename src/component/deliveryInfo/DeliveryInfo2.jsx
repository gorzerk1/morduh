import React, { useState } from 'react'


function DeliveryInfo(){
  const [streetNum, setStreetNum] = useState('')
  const [streetName, setStreetName] = useState('')
  const [enterPoint, setEnterPoint] = useState('')
  const [homeNum, setHomeNum] = useState('')
  const [floorNum, setFloorNum] = useState('')
  const [deliveryRequest, setDeliveryRequest] = useState('')


  return (
    <div className='deliveryInfo--body'>
      <img className='deliveryInfo--body__background' src="../../../backgroundAbout2.png" alt="" />
      <div className='deliveryInfo--container'>
        <div className='deliveryInfo--container--info'>לאן המשלוח</div>
        <img className='deliveryInfo--body__close' src="../../../order/close.png" alt="" />

        <form className='deliveryInfo--grid'>
          
          <div className='deliveryInfo__grid--col'>
            <div className='deliveryInfo--textbar'>בית</div>
            <input type="text" name="mytextbox" onChange={(e) => {setStreetNum(e.target.value)}}></input>
          </div>

          <div className='deliveryInfo__grid--col2'>
            <div className='deliveryInfo--textbar'>רחוב</div>
            <input type="text" name="mytextbox" onChange={(e) => {setStreetName(e.target.value)}}></input>
          </div>

          <div className='deliveryInfo__grid--col'>
            <div className='deliveryInfo--textbar'>קומה</div>
            <input type="text" name="mytextbox" onChange={(e) => {setEnterPoint(e.target.value)}}></input>
          </div>

          <div className='deliveryInfo__grid--col'>
            <div className='deliveryInfo--textbar'>דירה</div>
            <input type="text" name="mytextbox" onChange={(e) => {setHomeNum(e.target.value)}}></input>
          </div>

          <div className='deliveryInfo__grid--col'>
            <div className='deliveryInfo--textbar'>כניסה</div>
            <input type="text" name="mytextbox" onChange={(e) => {setFloorNum(e.target.value)}}></input>
          </div>

          <div className='deliveryInfo__grid--col3'>
            <div className='deliveryInfo--textbar'>הערות לשליח</div>
            <input type="text" name="mytextbox" onChange={(e) => {setDeliveryRequest(e.target.value)}}></input>
          </div>

          <button className='deliveryInfo__grid--button'>אישור</button>

        </form>


      </div>
    </div>
  )
}

export default DeliveryInfo
