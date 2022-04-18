import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../assets/styles/globat'
import { theme } from '../../assets/styles/themes/theme'
import { Home } from '../../pages/Home'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
