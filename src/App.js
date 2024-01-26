import React, { createContext, useState } from 'react'
import Nav from './Nav'
import Products from './Products'
import Context from './Context'

export default function App() {

  return (
   <Context>
      <Nav />
      <Products />
      </Context>
  )
}
