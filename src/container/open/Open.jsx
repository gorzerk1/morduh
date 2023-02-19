import React from 'react'
import { Navbar, Feature, About, MenuMain, Info, Gallery } from '../../component'

function Open (){
  return (
    <div>
      <Navbar/>
      <div className='app-padding'>
      <Feature/>
      <About/>
      <MenuMain/>
      <Gallery/>
      <Info/>
      </div>
    </div>
  )
}

export default Open