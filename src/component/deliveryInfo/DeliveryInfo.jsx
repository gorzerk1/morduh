import React, { useState } from 'react'


function DeliveryInfo(){
  const [formValues, setFormValues] = useState([
    { name: 'streetName', label: 'רחוב', value: '', fit: "2" },
    { name: 'streetNum', label: 'בית', value: ''},
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

  const allInputs = formValues.map(field => (
  <div>
    <div className={`deliveryInfo__grid--col${field.fit ? `${field.fit}` : ''}`}>
      <label className='deliveryInfo--textbar'>{field.label}</label>
      <input type="text" name="mytextbox" value={field.value} onChange={handleInputChange} />
    </div>
  </div>
  ))



  return (
    <div className='deliveryInfo--body'>
      <img className='deliveryInfo--body__background' src="../../../backgroundAbout2.png" alt="" />
      <div className='deliveryInfo--container'>
        <div className='deliveryInfo--container--info'>לאן המשלוח</div>
        <img className='deliveryInfo--body__close' src="../../../order/close.png" alt="" />

        <form className='deliveryInfo--grid'>
          {allInputs}
          <button className='deliveryInfo__grid--button'>אישור</button>

        </form>


      </div>
    </div>
  )
}

export default DeliveryInfo