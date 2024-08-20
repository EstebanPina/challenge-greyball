import React from 'react'
import Cart from './Cart'

const Nav = () => {
  return (
    <nav className="flex justify-between sticky top-0 z-40 w-full bg-white shadow-2xl shadow-black/30 h-[12vh]">
      <img src="/logo.png" className="h-full py-1"/>
      <Cart/>
    </nav>
  )
}

export default Nav