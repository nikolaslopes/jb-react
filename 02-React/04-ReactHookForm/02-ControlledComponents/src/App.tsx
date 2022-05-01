import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
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
            placeholder="jType your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
