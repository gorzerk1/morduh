import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'


function OrderMenu(){
  return (
  <div className='orderMenu--body'>
    <img className='orderMenu--body__image' src="../../../backgroundAbout2.png"/>
    <div className='orderMenu--container'>
      <div className='orderMenu--foodText'>
        <div>תפריט</div>
        <div>ספישייל</div>
        <div>בורגר</div>
        <div>טוסט</div>
        <div>כריך</div>
        <div>מטוגנים</div>
        <div>מיקסים</div>
      </div>
      <div className='orderMenu--foodMenu'>asd2</div>
      <div className='orderMenu--foodCart'>
        <div>פרטי הזמנה</div>
        <div className='orderMenu--foodCart--order'>
          <div>מנה: שדגשדגשגששדגשדגשדג</div>
          <div>שינויים: שדגשדגשדגשדגשדגדגש</div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default OrderMenu