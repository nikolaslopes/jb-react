import { useNavigate, useParams } from 'react-router-dom'
import data from '../../assets/data.json'

import { Header, Container, ProductContent, ProductImage } from './styles'
import { ParamsType } from './types'

export function Production() {
  const { selectedProduct } = useParams<ParamsType>()
  const navigate = useNavigate()

  const selected = data.products.find(
    (product) => product.id.toString() === selectedProduct
  )

  function goToProduct(id: number) {
    navigate(`/production/${id}`)
  }

  console.log(selectedProduct)

  return (
    <>
      <Header>O que você vai fabricar hoje?</Header>

      <Container>
        {data.products.map((product) => (
          <ProductContent
            key={product.id}
            onClick={() => goToProduct(product.id)}
          >
            <ProductImage src={product.image} />
            <h4>{product.name}</h4>
          </ProductContent>
        ))}
      </Container>
      <p>{selected?.recipe}</p>
    </>
  )
}
