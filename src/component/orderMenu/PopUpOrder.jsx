import React, {useState} from 'react'

function PopUpOrder(){
  const [sausageCapacity , setSausage] = useState(0)
  const [sauceCapacity, setSauceCapacity] = useState(0)
  const [sauceInfo, setSauceInfo] = useState([])

  function addNaknikCapacity(e) {
    if (sausageCapacity < 4) {
      setSausage(sausageCapacity + 1);
      setSauceInfo(prev => [...prev, e.target.innerText]);
    }
  }
  console.log(sauceInfo)

  function addButtons(name) {
    if (sauceInfo === name) {
      return (<>
        <img src="../../../minusButton.png"/>
        <img src="../../../plusButton.png"/>
      </>)
    } else (null)
  }
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
                    <div>{`(4 / ${sausageCapacity})`}</div>
                  </div>
                  <div className='options--container'>
                    <div className='options--button' onClick={addNaknikCapacity}>
                      <div>הודו ברביקיו</div>
                      {addButtons("הודו ברביקיו")}
                    </div>
                    <div className='options--button' onClick={addNaknikCapacity}>
                      <div>הודו דבש</div>
                      {addButtons("הודו דבש")}
                    </div>
                    <div className='options--button' onClick={addNaknikCapacity}>
                      <div>כתף מעושן</div>
                      {addButtons("כתף מעושן")}
                    </div>
                    <div className='options--button' onClick={addNaknikCapacity}>
                      <div>מעדן אווז</div>
                      {addButtons("מעדן אווז")}
                    </div>
                    <div className='options--button' onClick={addNaknikCapacity}>
                      <div>רסטביף</div>
                      {addButtons()}
                    </div>
                    <div className='options--button' onClick={addNaknikCapacity}>
                      <div>הבית</div>
                      {addButtons()}
                    </div>
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
