import React from 'react'
import { Navbar, Feature, About, MenuMain } from '../../component'

function Open (){
  return (
    <div>
      <Navbar/>
      <div className='app-padding'>
      <Feature/>
      <About/>
      <MenuMain/>
      </div>
    </div>
  )
}

export default Open