import { useEffect, useState } from 'react'

import { getFuel } from './services'
import {
  Container,
  Title,
  SettingsIcon,
  Panel,
  Box,
  Row,
  FuelText,
  FuelPrice,
} from './styles'
import { IFuel } from './types'

export function Fuel() {
  const [fuels, setFuels] = useState<IFuel[]>()

  async function fetchAndUpdateData() {
    const data = await getFuel()

    setFuels(data)
    console.log(data)
  }

  useEffect(() => {
    fetchAndUpdateData()
  }, [])

  return (
    <Container>
      <Title>Posto React JS</Title>
      <SettingsIcon />

      <Panel>
        {fuels?.map((fuel) => (
          <Row key={fuel.id}>
            <Box>
              <FuelText>{fuel.name}</FuelText>
            </Box>
            <Box>
              <FuelPrice>{fuel.price}</FuelPrice>
            </Box>
          </Row>
        ))}
      </Panel>
    </Container>
  )
}
