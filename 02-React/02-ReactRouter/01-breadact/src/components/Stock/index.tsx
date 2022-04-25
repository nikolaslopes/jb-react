import { useNavigate, useParams } from 'react-router-dom'
import data from '../../assets/data.json'

import { Header, Container } from './styles'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export function Stock() {
  const { selectedProduct } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <Header>
        <h3>Estoque de protudos</h3> <button>{<AiFillEye />}</button>
      </Header>

      <Container>
        {data.products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <h5>{product.stock}</h5>
          </div>
        ))}
      </Container>
    </>
  )
}
