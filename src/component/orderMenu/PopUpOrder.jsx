import React from 'react'

function PopUpOrder(){
  return (
    <div>
        <img className='orderMenu--body__image' src="../../../backgroundAbout2.png"/>
        <div className='PopUpOrder--body'>
            <div className='PopUpOrder--container'>
                <div className='PopUpOrder--upper'>
                  <div className='PopUpOrder--title'>טוסט נקניק</div>
                  <img src="../../../order/close.png" alt="" />
                </div>
                  <div className='PopUpOrder--options'>

                  <div className='PopUpOrder--info'>
                    <div>4 סוגי נקניקים לבחירה:</div>
                    <div>( 4 / 0 )</div>
                  </div>
                  <div className='options--container'>
                    <div className='options--button'>
                      <div>הודו ברביקיו</div>
                      <img src="../../../minusButton.png"/>
                      <img src="../../../plusButton.png"/>
                    </div>
                    <div className='options--button'>הודו דבש</div>
                    <div className='options--button'>כתף מעושן</div>
                    <div className='options--button'>מעדן אווד</div>
                    <div className='options--button'>רסטביף</div>
                    <div className='options--button'>הבית</div>
                  </div>
                  <div className='PopUpOrder--info'>
                     <div>ירקות לבחירה:</div>
                  </div>
                  <div className='options--container'>
                    <div className='options--button'>בצל</div>
                    <div className='options--button'>חסה</div>
                    <div className='options--button'>כתף מעושן</div>
                  </div>
                  <div className='PopUpOrder--info'>
                    <div>משהו בפנים :</div>
                  </div>
                  <div className='options--container'>
                    <div className='options--button'>בצל בטוגן</div>
                    <div className='options--button'>תוספת נקניק</div>
                    <div className='options--button'>ביצת עין</div>
                    <div className='options--button'>מעדן אווז</div>
                    <div className='options--button'>דאבל נקניק</div>
                  </div>
                  <div className='PopUpOrder--info'>
                    <div>רטבים לבחירה:</div>
                    <div>( 5 / 0 )</div>
                  </div>
                  <div className='options--container'>
                    <div className='options--button'>אלף האיים</div>
                    <div className='options--button'>חרדל דבש</div>
                    <div className='options--button'>מיונז</div>
                    <div className='options--button'>מיונז שום</div>
                    <div className='options--button'>סריראצ'ה</div>
                    <div className='options--button'>פסטו</div>
                    <div className='options--button'>צ'ילי מתוק</div>
                    <div className='options--button'>קטשופ</div>
                  </div>
                  <div className='PopUpOrder--info'>
                    <div>הערות:</div>
                  </div>
                  <div className='options--container'>
                    <textarea ></textarea>
                  </div>
                </div>
                <div className='PopUpOrder--navbar'>
                  <div>סה"כ: 41</div>
                  <div>אישור</div>
                </div>

            </div>
        </div>
    </div>
  )
}
export default PopUpOrder