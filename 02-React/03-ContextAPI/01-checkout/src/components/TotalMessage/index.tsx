import { Container, Message } from './styled'

type TotalMessageProps = {
  userName: string
}

export function TotalMessage({ userName }: TotalMessageProps) {
  return (
    <Container>
      <Message>
        {userName}, o valor da sua compra ultrapassou <strong>R$ 100.00</strong>
        , você tem <strong>5%</strong> de desconto.
      </Message>
    </Container>
  )
}
