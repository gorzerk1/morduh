import React from 'react'
import Navbar from './Navbar' 

function Screen(){
    return (
        <div>
        <Navbar/>
        <div>
            <img className='app-size' src='../public/morduhImages/smokebackground.png'/>
            <div className='black--screen'></div>
        </div>
        </div>
    )
}

export default Screen