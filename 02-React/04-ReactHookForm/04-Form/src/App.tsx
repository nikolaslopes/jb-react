import { useState } from 'react'
import './App.css'

import { Title, FormGroup, SubmitButton } from './components/styles'

import ReactInputMask from 'react-input-mask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title>Complete seus dados</Title>

      <form>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" placeholder="Insira o nome" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="Insira o e-mail" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="cpf">CPF</label>
          <ReactInputMask
            name="cpf"
            mask="999.999.999-999"
            placeholder="Insira o CPF"
          />
        </FormGroup>

        <SubmitButton>Enviar</SubmitButton>
      </form>
    </div>
  )
}

export default App
