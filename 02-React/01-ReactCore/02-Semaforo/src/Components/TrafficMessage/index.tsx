import './styles.css'

type TrafficMessageProps = {
  message: string
}

export function TrafficMessage({ message }: TrafficMessageProps) {
  return <p>{message}</p>
}
