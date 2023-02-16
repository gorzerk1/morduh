import React from 'react'
import { Navbar, Feature, About, MenuMain, Info } from '../../component'

function Open (){
  return (
    <div>
      <Navbar/>
      <div className='app-padding'>
      <Feature/>
      <About/>
      <MenuMain/>
      <Info/>
      </div>
    </div>
  )
}

export default Open