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

  const [formData, setFormData] = useState([])

  const cssFormData = (
              <div className='deliveryInfo--popDown--line'>
                <div>קומה:{formData.floorNum}</div>
                <div>דירה: {formData.homeNum}</div>
                <div>כניסה: {formData.enterPoint}</div>
                <div>בית: {formData.streetNum}</div>
                <div>רחוב: {formData.streetName}</div>
              </div>

  )


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

  function handleSubmit(event){
    event.preventDefault();
    const newFormData = {};
    formValues.forEach((field) => {
      newFormData[field.name] = field.value;
    });
    setFormData(newFormData);
    console.log('Form data:', newFormData);
  }

  const allInputs = formValues.map(field => {
    const classname = `deliveryInfo__grid--col${field.fit ? `${field.fit}` : ''}`
    return (
        <div className={classname}>
          <label className='deliveryInfo--textbar'>{field.label}</label>
          <input name={field.name} value={field.value} onChange={handleInputChange} />
        </div>
    )
  })



  return (
    <div className='deliveryInfo--body'>
      <img className='deliveryInfo--body__background' src="../../../backgroundAbout2.png" alt="" />
      <div className='deliveryInfo--container'>
        <img className='deliveryInfo--body__close' src="../../../order/close.png" alt="" />
        <div className='deliveryInfo--container--info'>לאן המשלוח</div>
        
        <form onSubmit={handleSubmit} className='deliveryInfo--grid'>
          <div className='deliveryInfo--savedInfo'>
            <img src="../../../order/downArrow.png" alt="" />
            <div>לחץ בשביל לראות כתובות שמורות</div>
            <div className='deliveryInfo--popDown'>
              {formData.length === 0 ? '' : cssFormData}
            </div>
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