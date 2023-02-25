import React, { useState } from 'react'


function DeliveryInfo(){
  const [formValues, setFormValues] = useState([
    { name: 'streetNum', label: 'בית', value: ''},
    { name: 'streetName', label: 'רחוב', value: '', fit: "2" },
    { name: 'enterPoint', label: 'כניסה', value: ''},
    { name: 'homeNum', label: 'דירה', value: ''},
    { name: 'floorNum', label: 'קומה', value: ''},
    { name: 'deliveryRequest', label: 'הערות לשליח', value: '', fit: "3" },
  ]);

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormValues(values => values.map(field => {
      if (field.name === name) {
        return { ...field, value }
      } else {
        return field;
      }
    }))
  }

  const allInputs = formValues.map(field => {
    const classname = `deliveryInfo__grid--col${field.fit ? `${field.fit}` : ''}`
    return (
        <div className={classname}>
          <label className='deliveryInfo--textbar'>{field.label}</label>
          <input type="text" name={field.name} value={field.value} onChange={handleInputChange} />
        </div>
    )
  })



  return (
    <div className='deliveryInfo--body'>
      <img className='deliveryInfo--body__background' src="../../../backgroundAbout2.png" alt="" />
      <div className='deliveryInfo--container'>
        <img className='deliveryInfo--body__close' src="../../../order/close.png" alt="" />
        <div className='deliveryInfo--container--info'>לאן המשלוח</div>
        
        <form className='deliveryInfo--grid'>
          <div className='deliveryInfo--savedInfo'>
            <img src="../../../order/downArrow.png" alt="" />
            <div>רחוב: הפסגה בית: 36 קומה: 0 דירה: 5 כניסה: 0</div>
          </div>
          {allInputs}
          <div className='deliveryInfo--checkBox'>
            <label>שמור כתובת</label>
            <input type="checkbox" name="myCheckbox" value="1"/>
          </div>
          <button className='deliveryInfo__grid--button'>אישור</button>
          
        </form>


      </div>
    </div>
  )
} 

export default DeliveryInfo