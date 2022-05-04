import { useState } from 'react'
import './App.css'

import { Title, FormGroup } from './components/styles'

import ReactInputMask from 'react-input-mask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title>Complete seus dados</Title>

      <form>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <ReactInputMask name="cpf" mask="999.999.999-999" />
        </FormGroup>
      </form>
    </div>
  )
}

export default App
