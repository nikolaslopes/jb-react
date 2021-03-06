import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './assets/styles/global'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { Production } from './components/Production'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Recipe } from './components/Recipe'
import { Stock } from './components/Stock'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/production" />} />

        <Route path="/production" element={<Production />}>
          <Route path=":productId" element={<Recipe />} />
        </Route>

        <Route
          path="/stock"
          element={
            <ProtectedRoute>
              <Stock />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
