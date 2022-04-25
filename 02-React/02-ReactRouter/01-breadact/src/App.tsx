import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './assets/styles/global'
import { Navbar } from './components/Navbar'
import { Production } from './components/Production'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/production" />} />
        <Route path="/production/" element={<Production />}>
          <Route path=":selectedProduct" />
        </Route>
        <Route path="/stock" element={<h1>stock</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
