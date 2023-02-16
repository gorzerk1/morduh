import React from 'react'

const Info = () => {
  return (
    <div className='info__body'> 
      <div className='info__container--google'>GOOGLE MAP</div>
      
      <div className='info__body--container'>

      <div className='container--title'>דברו איתנו</div>

      <div className='container--info'>
      <img className='info__body--background' src="../../../backgroundAbout2.png" />
        <div className='container--openTime'>
          <div>א-ה | 00:00-16:00</div>
          <div>מוצ"ש | 00:00-20:00</div>
        </div>  

        <div className='container--location'>
          <div>טל': 03-9365595</div>
          <div>דרך הציונות 21, אריאל</div>
        </div>
      </div>

      </div>
      
    </div>
  )
}
export default Info