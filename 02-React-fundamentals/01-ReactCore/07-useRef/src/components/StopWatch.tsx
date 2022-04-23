import { useState, useRef } from 'react'

export function StopWatch() {
  const [time, setTime] = useState(0)
  const myInterval = useRef<number>()

  function start() {
    myInterval.current = setInterval(
      () => setTime((prevState) => prevState + 1),
      1000
    )
  }

  function stop() {
    clearInterval(myInterval.current)
  }

  console.log(time)
  return (
    <div>
      {time}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}
