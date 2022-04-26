import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #282c34;
    min-height: 100vh;
    font-family: 'Fira Code', sans-serif;
  }
`
