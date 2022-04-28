import { useUser } from '../../context/UserContext'
import { Container, Message } from './styled'

export function TotalMessage() {
  const user = useUser()

  return (
    <Container>
      <Message>
        {user?.state.name}, o valor da sua compra ultrapassou{' '}
        <strong>R$ 100.00</strong>, você tem <strong>5%</strong> de desconto.
      </Message>
    </Container>
  )
}
