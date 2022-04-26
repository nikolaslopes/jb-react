import { useState } from 'react'
import { GlobalStyles } from './assets/styles/global'
import { Checkout } from './components/Checkout'

function App() {
  const [user, setUser] = useState({
    name: 'Nick',
  })
  return (
    <>
      <GlobalStyles />
      <Checkout userName={user.name} />
    </>
  )
}

export default App
