import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './assets/styles/global'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { Production } from './components/Production'
import { Stock } from './components/Stock'

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
        <Route path="/stock" element={<Stock />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
