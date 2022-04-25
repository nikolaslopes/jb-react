import { Container, Link } from './styles'

export function Navbar() {
  return (
    <Container>
      <Link to="/production">Production</Link>
      <Link to="/stock">Estoque</Link>
    </Container>
  )
}
