import React from 'react'
import { Navbar, Feature, About, MenuMain, Info, MenuList, Gallery, Order } from './component'
import { Menu, Open } from './container'
import { Routes , Route } from 'react-router-dom'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Open/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/menuList" element={<MenuMain/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
  )
}

export default App