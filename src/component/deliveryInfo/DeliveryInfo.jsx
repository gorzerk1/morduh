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

  const [formData, setFormData] = useState([])
  const [popDown, setPopDown] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [tempFormData, setTempFormData] = useState(null)



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
    const newFormData = {}
    formValues.forEach((field) => {
      newFormData[field.name] = field.value
    })
    if (isSaved) {
      setFormData((prevFormData) => [...prevFormData, newFormData])
    } else if (!isSaved) {
      setTempFormData(newFormData)
    }
    console.log(tempFormData)
  }

  function removeFormData(index) {
    const updatedFormData = [...formData]
    updatedFormData.splice(index, 1)
    setFormData(updatedFormData)
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

  const divPopDown = (
    <div className='deliveryInfo--popDown'>
      {formData.length === 0 ? '' :
        formData.slice(0, 3).map((data, index) => (
          <div className='deliveryInfo--popDown--line' key={index}>
            <div>רחוב: {data.streetName}</div>
            <div>בית: {data.streetNum}</div>
            <div>כניסה: {data.enterPoint}</div>
            <div>דירה: {data.homeNum}</div>
            <div>קומה:{data.floorNum}</div>
            <img src="../../../order/bin.png" className='deliveryInfo--bin' onClick={() => {removeFormData(index)}}/>
          </div>
        ))
      }
    </div>
  )



  return (
    <div className='deliveryInfo--body'>
      <img className='deliveryInfo--body__background' src="../../../backgroundAbout2.png" alt="" />
      <div className='deliveryInfo--container'>
        <img className='deliveryInfo--body__close' src="../../../order/close.png" alt="" />
        <div className='deliveryInfo--container--info'>לאן המשלוח</div>
        
        <form onSubmit={handleSubmit} className='deliveryInfo--grid'>
          <div className='deliveryInfo--savedInfo'>
          <div>לחץ בשביל לראות כתובות שמורות</div>
            <img src="../../../order/downArrow.png" alt="" onClick={() => {setPopDown(!popDown)}}/>
            {popDown ? divPopDown : ''}
          </div>
          {allInputs}
          <div className='deliveryInfo--checkBox'>
            <label>שמור כתובת</label>
            <input type="checkbox" name="myCheckbox" value="1" onClick={() => setIsSaved(!isSaved)}/>
          </div>
          <button className='deliveryInfo__grid--button'>אישור</button>
          
        </form>


      </div>
    </div>
  )
} 

export default DeliveryInfo