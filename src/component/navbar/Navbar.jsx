import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Link as AnchorLink} from 'react-scroll';

function Navbar(props){
  const [menuOpened, setMenuOpened] = useState(false);

  const menu = (
    <div  className='navbar__menuPop'>
      <Link className='menuPop__link' to="/">דף הבית</Link>
      <Link className='menuPop__link'>הזמנה</Link>
      <Link className='menuPop__link'>עלינו</Link>
      <AnchorLink className='menuPop__link' to="Menu">המנות</AnchorLink>
      <Link className='menuPop__link'>צרו קשר</Link>
    </div>
  )

  return (
    <div>
      <div className='navbar__body'>

      <img onClick={()=> {setMenuOpened(!menuOpened)}}
      className='navbar__menuIcon'
      src='../../../mainNavbar.png'
      />

      <div className='navbar__buttons'>
        <AnchorLink className="buttons__link" to="contact">צור קשר</AnchorLink>
        <AnchorLink className="buttons__link" to="gallery" spy={true}>גלריה</AnchorLink>
        <AnchorLink className='buttons__link' to="Menu">המנות</AnchorLink>
        <Link className="buttons__link">הזמנה</Link>
      </div>

      <div className='navbar__info'>
          <a href='https://www.facebook.com/morduchtoast/'><img className='navbar__facebook' src='../../../facebookNavbar.png'/></a>
          <div>03-936-5595</div>
          <div>דרך הציונות 21, אריאל</div>
          <Link to="/"><img className='navbar__logo' src='../../../logo.png'/></Link>
      </div>
    </div>
      <div>
        {menuOpened && menu}
      </div>
    </div>
  )
}

export default Navbar