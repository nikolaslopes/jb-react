import { Total } from '../Total'
import { Container, Title } from './styled'

type CheckoutProps = {
  userName: string
}

export function Checkout({ userName }: CheckoutProps) {
  return (
    <Container>
      <Title>Checkout</Title>

      <Total userName={userName} />
    </Container>
  )
}
