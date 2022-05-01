import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [name, setName] = useState({
    value: '',
    invalid: true,
    touched: false,
  })
  const [email, setEmail] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(name)
    console.log(email)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            value={name.value}
            onClick={() => {
              console.log('a')
              setName({
                ...name,
                touched: true,
              })
            }}
            onChange={(event) => {
              if (event.target.value === '') {
                console.log('b')
                setName({
                  value: event.target.value,
                  invalid: true,
                  touched: true,
                })
              } else {
                console.log('c')
                setName({
                  value: event.target.value,
                  invalid: false,
                  touched: true,
                })
              }
            }}
          />

          {name.invalid && name.touched && <p>Por favor, preencha o nome</p>}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Type your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </header>
    </div>
  )
}

export default App
