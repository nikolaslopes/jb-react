import { BrowserRouter } from 'react-router-dom'

import { Container } from './styles'
import { Routes } from '../../routes'
import { GlobalStyles } from '../../assets/styles/global'
import { Navbar } from '../Navbar'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  )
}
