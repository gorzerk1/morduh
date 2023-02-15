import React from 'react'

function Navbar(){
    return (
        <>
        
        <div className='top--navbar'>
            <img src='../public/morduhImages/userlogin.png'
             height="30px"
             width="30px"
             className='navbar--username'/>

            <div>logo</div>

            <img src="../public/morduhImages/navmenu.png"
             height="30px"
             width="30px"
             className='navbar--menu'/>
        </div>
        <div className='bottom--navbar'>
            <img src="../public/morduhImages/home.png" height="30px" width="30px"/>
            <img src="../public/morduhImages/info.png" height="30px" width="30px"/>
            <img src="../public/morduhImages/cart.png" height="30px" width="30px"/>
        </div>
        </>
    )
}

export default Navbar