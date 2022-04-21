import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { usePersistentDarkMode } from './hooks/usePersistentDarkMode'

function App() {
  const { isDarkMode, setIsDarkMode } = usePersistentDarkMode()

  return (
    <div className="App">
      <h1>{isDarkMode ? 'DarkMode ON' : 'DarkMode OFF'}</h1>
      <button onClick={() => setIsDarkMode(true)}>Turn on Darkmode</button>
      <button onClick={() => setIsDarkMode(false)}>Turn off Darkmode</button>
    </div>
  )
}

export default App
