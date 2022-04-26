import { TotalMessage } from '../TotalMessage'
import { Container, Message, Row, TotalValue } from './styled'

type TotalProps = {
  userName: string
}

export function Total({ userName }: TotalProps) {
  return (
    <Container>
      <Row>
        <Message>Total</Message>
        <TotalValue>R$ 100</TotalValue>
      </Row>

      <TotalMessage userName={userName} />
    </Container>
  )
}
