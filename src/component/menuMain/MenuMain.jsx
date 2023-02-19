import React from 'react'
  
function Menu(){
  
  return (
    <div className='menu__body' id="Menu">
      <img className='menu__body--background' src="./../../menu/background.png" />

      <div className='menu__body--container'>

        <div className='menu__body--text'>המנות שלנו</div>

        <div className='menu__container--topLayer'>
          <div className='container__topLayer--naknik'>
            <img src='../../../menu/image25.png'  className='menu__container--food'/>
            <div className='naknik--text'>טוסט נקניק</div>
          </div>
          
          <div className='container__topLayer--burger'>
            <img src='../../../menu/image26.png'  className='menu__container--middleFood'/>
            <div className='burger--text'>בורגרים</div>
          </div>

          <div className='container__topLayer--spacial'>
            <img src='../../../menu/image27.png'  className='menu__container--food'/>
            <div className='spacial--text'>ספיישלים</div>
          </div>
        </div>

        <div className='menu__container--bottomLayer'>
          <div className='container__bottomLayer--karih'>
            <img src='../../../menu/image28.png' className='menu__container--food' />
            <div>כריך בשר</div>
          </div>
          
          <div className='container__bottomLayer--metuganim'>
            <img src='../../../menu/image29.png' className='menu__container--middleFood' />
            <div>מטוגנים</div>
          </div>
        </div>
        
      </div>
      <div className='global-shadow-bottom'></div>
      <div className='global-shadow-top'></div>
    </div>
  )
}

export default Menu