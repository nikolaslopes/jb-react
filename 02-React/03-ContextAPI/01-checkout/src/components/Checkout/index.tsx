import { useUser } from '../../context/UserContex'
import { Total } from '../Total'
import { Container, Header, Title } from './styled'

export function Checkout() {
  const user = useUser()

  return (
    <Container>
      <Header>Seja bem vindo, {user?.name}</Header>
      <Title>Checkout</Title>

      <Total />
    </Container>
  )
}
