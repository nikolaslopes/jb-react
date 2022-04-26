import { useUser } from '../../context/UserContex'
import { Total } from '../Total'
import { Container, Header, Title } from './styled'

type CheckoutProps = {
  userName: string
}

export function Checkout({ userName }: CheckoutProps) {
  const user = useUser()

  return (
    <Container>
      <Header>Seja bem vindo, {user?.name}</Header>
      <Title>Checkout</Title>

      <Total userName={userName} />
    </Container>
  )
}
