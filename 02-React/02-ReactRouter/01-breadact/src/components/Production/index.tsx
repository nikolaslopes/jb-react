import data from '../../assets/data.json'

import { Header, Container, ProductContent, ProductImage } from './styles'

export function Production() {
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
    </>
  )
}
