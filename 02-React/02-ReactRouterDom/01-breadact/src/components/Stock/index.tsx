import { useNavigate, useParams, useLocation } from 'react-router-dom'
import data from '../../assets/data.json'

import { Header, Container } from './styles'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export function Stock() {
  const location = useLocation()
  const navigate = useNavigate()

  const queryParam = new URLSearchParams(location.search)
  const showStock = queryParam.get('showStock') === 'true'

  function toggleShowStock() {
    navigate(`?showStock=${!showStock}`, { replace: true })
  }

  return (
    <>
      <Header>
        <h3>Estoque de protudos</h3>
        <button onClick={toggleShowStock}>
          {showStock ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </Header>

      <Container>
        {data.products.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <h5>{showStock ? `${product.stock}` : '-'} </h5>
          </div>
        ))}
      </Container>
    </>
  )
}
