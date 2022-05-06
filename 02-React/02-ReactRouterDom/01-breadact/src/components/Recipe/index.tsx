import data from '../../assets/data.json'

import { useParams } from 'react-router-dom'
import { ParamsType } from './types'

export function Recipe() {
  const { productId } = useParams<ParamsType>()

  const selected = data.products.find(
    (product) => product.id.toString() === productId
  )

  return <p>{selected?.recipe}</p>
}
