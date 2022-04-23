import { BrowserRouter } from 'react-router-dom'

import { Container } from './styles'
import { Routes } from '../../routes'
import { GlobalStyles } from '../../assets/styles/global'

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  )
}
