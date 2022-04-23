import { useState } from 'react'
import { TrafficMessage } from '../TrafficMessage'
import './styles.css'

export function TrafficLight() {
  const [message, setMessage] = useState('')
  const [keyColor, setKeyColor] = useState<'red' | 'yellow' | 'green'>()

  function handleRedLightClick() {
    setMessage('Cuidado! Espere o sinal abrir')
    setKeyColor('red')
  }

  function handleYellowLightClick() {
    setMessage('Atenção! Está prestes a ficar vermelho')
    setKeyColor('yellow')
  }

  function handleGreenLightClick() {
    setMessage('Pode passar!')
    setKeyColor('green')
  }

  return (
    <main>
      <div className="container">
        <div className="content">
          <button
            className={`red ${keyColor === 'red' && 'selected'}`}
            onClick={handleRedLightClick}
          ></button>
          <button
            className={`yellow ${keyColor === 'yellow' && 'selected'}`}
            onClick={handleYellowLightClick}
          ></button>
          <button
            className={`green ${keyColor === 'green' && 'selected'}`}
            onClick={handleGreenLightClick}
          ></button>
        </div>
      </div>

      <TrafficMessage message={message} />
    </main>
  )
}
