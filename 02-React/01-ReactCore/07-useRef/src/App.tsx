import { useState, useRef } from 'react'
import './App.css'
import { StopWatch } from './components/StopWatch'

function App() {
  const count = useRef(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  function incrementRef() {
    count.current++

    console.log(count.current)
  }

  function getInputValue() {
    console.log(inputRef)
    console.log(inputRef.current)
    console.log(inputRef.current?.value)
  }

  console.log(inputRef)
  return (
    <div className="App">
      <div>
        <input ref={inputRef} />

        <button
          onClick={() => {
            inputRef.current?.focus()
            getInputValue()
          }}
        >
          Focus on input
        </button>
      </div>

      <div>
        <button onClick={incrementRef}>Count alert</button>
      </div>

      <div>
        <StopWatch />
      </div>
    </div>
  )
}

export default App
