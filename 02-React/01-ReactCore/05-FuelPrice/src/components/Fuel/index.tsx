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
import { FuelProps, IFuel } from './types'

export function Fuel({ editMode, toggleEditMode }: FuelProps) {
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

      {editMode && <h2>readt</h2>}

      <SettingsIcon onClick={toggleEditMode} />

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
