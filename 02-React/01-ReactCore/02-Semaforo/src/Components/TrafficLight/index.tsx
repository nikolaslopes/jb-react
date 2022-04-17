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
      <div className="main">
        <div className="content">
          <div className="red" onClick={handleRedLightClick}></div>
          <div className="yellow" onClick={handleYellowLightClick}></div>
          <div className="green" onClick={handleGreenLightClick}></div>
        </div>
      </div>

      <TrafficMessage message={message} />
    </main>
  )
}
