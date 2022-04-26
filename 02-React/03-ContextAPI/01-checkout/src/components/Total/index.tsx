import { TotalMessage } from '../TotalMessage'
import { Container, Message, Row, TotalValue } from './styled'

export function Total() {
  return (
    <Container>
      <Row>
        <Message>Total</Message>
        <TotalValue>R$ 100</TotalValue>
      </Row>

      <TotalMessage />
    </Container>
  )
}
