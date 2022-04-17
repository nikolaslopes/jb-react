import { useState } from 'react'
import { TrafficMessage } from '../TrafficMessage'
import './styles.css'

export function TrafficLight() {
  const [message, setMessage] = useState('')
  function handleRedLightClick() {
    setMessage('Cuidado! Espere o sinal abrir')
  }

  function handleYellowLightClick() {
    setMessage('Atenção! Está prestes a ficar vermelho')
  }

  function handleGreenLightClick() {
    setMessage('Pode passar!')
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <button className="red" onClick={handleRedLightClick}></button>
          <button className="yellow" onClick={handleYellowLightClick}></button>
          <button className="green" onClick={handleGreenLightClick}></button>
        </div>
      </div>

      <TrafficMessage message={message} />
    </main>
  )
}
