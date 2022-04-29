import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)

    const name = data.get('name')
    const email = data.get('email')

    console.log(name)
    console.log(email)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Type your name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Type your email" />
          <button type="submit">Enviar</button>
        </form>
      </header>
    </div>
  )
}

export default App
