import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);



  const menu = (
    <div  className='navbar__menuPop'>
      <Link className='menuPop__link' to="/">דף הבית</Link>
      <Link className='menuPop__link'>הזמנה</Link>
      <Link className='menuPop__link'>עלינו</Link>
      <Link className='menuPop__link' to="/Menu">תפריט</Link>
      <Link className='menuPop__link'>צרו קשר</Link>
    </div>
  )

  return (
    <div>
      <div className='navbar__body'>

      <img onClick={()=> {setMenuOpened(!menuOpened)}} className='navbar__menuIcon' src='../../../mainNavbar.png'/>

      <div className='navbar__buttons'>
        <Link className="buttons__link">צור קשר</Link>
        <Link className="buttons__link" to="/gallery">גלריה</Link>
        <Link className="buttons__link" to="/Menu">תפריט</Link>
        <Link className="buttons__link">הזמנה</Link>
      </div>

      <div className='navbar__info'>
          <a href='https://www.facebook.com/morduchtoast/'><img className='navbar__facebook' src='../../../facebookNavbar.png'/></a>
          <div>03-936-5595</div>
          <div>דרך הציונות 21, אריאל</div>
          <img className='navbar__logo' src='../../../logo.png'/>
      </div>
    </div>
    <div>
      {menuOpened && menu}
    </div>
    </div>
  )
}

export default Navbar