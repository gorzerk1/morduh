import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Data from '../../data/MenuData'

function OrderMenu(){
  const [foodData, setFoodData] = useState(Data)

  const foodInfo = foodData.map((data, index) => (
  <div className='orderMenu--container2'>
    <img src={`${data.img}`} width='177px' height='121px'/>
    <div className='foodMenu--Info'>
     <div>{data.title}</div>
     <div>{data.orderInfo}</div>
     <div className='foodMenu--price'>
      <div>{data.price}</div>
      <img src="../../../shekel.png" alt="" />
     </div>
    </div>
    <button>בחר</button>
  </div>
  ))
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

      <div className='orderMenu--foodMenu'>
        {foodInfo}
      </div>

      <div className='orderMenu--foodCart'>
        <div>פרטי הזמנה</div>
        <div className='orderMenu--foodCart--order'>
          <div className='foodCart--foodTopic'>
            <div>מנה:</div>
            <div>שינויים:</div>
          </div>
          <div className='foodCart--foodInfo'>
            <div>המבוגר 200 גרם</div>
            <div>בלי חסה, בלי עגבניות, קטשופ, חריף</div>
          </div>
          <div className='foodCart--images'>
            <img src="../../../edit.png"/>
            <img src="../../../bin.png" />
          </div>
        </div>

        <button>
          לתשלום
        </button>
      </div>
    </div>
  </div>
    )
}

export default OrderMenu