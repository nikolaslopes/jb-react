import { GlobalStyles } from './assets/styles/global'
import { Checkout } from './components/Checkout'
import { Profile } from './components/Profile'

import { UserProvier } from './context/UserContext'

function App() {
  return (
    <UserProvier>
      <>
        <GlobalStyles />
        <Checkout />
        <Profile />
      </>
    </UserProvier>
  )
}

export default App
