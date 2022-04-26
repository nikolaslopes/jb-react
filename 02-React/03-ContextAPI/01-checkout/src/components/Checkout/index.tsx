import { Total } from '../Total'
import { Container, Header, Title } from './styled'

type CheckoutProps = {
  userName: string
}

export function Checkout({ userName }: CheckoutProps) {
  return (
    <Container>
      <Header>Seja bem vindo, {userName}</Header>
      <Title>Checkout</Title>

      <Total userName={userName} />
    </Container>
  )
}
