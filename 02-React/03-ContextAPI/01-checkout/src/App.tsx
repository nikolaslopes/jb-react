import { useState } from 'react'
import { GlobalStyles } from './assets/styles/global'
import { Checkout } from './components/Checkout'
import { Profile } from './components/Profile'
import { useUser } from './context/UserContex'

function App() {
  return (
    <>
      <GlobalStyles />
      <Checkout />
      <Profile />
    </>
  )
}

export default App
