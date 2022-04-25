import { useParams } from 'react-router-dom'
import data from '../../assets/data.json'

import { Header, Container, ProductContent, ProductImage } from './styles'
import { ParamsType } from './types'

export function Production() {
  const { selectedProduct } = useParams<ParamsType>()

  const selected = data.products.find(
    (product) => product.id.toString() === selectedProduct
  )

  return (
    <>
      <Header>O que você vai fabricar hoje?</Header>

      <Container>
        {data.products.map((product) => (
          <ProductContent key={product.id}>
            <ProductImage src={product.image} />
            <h4>{product.name}</h4>
          </ProductContent>
        ))}
      </Container>
      <p>{selected?.recipe}</p>
    </>
  )
}
