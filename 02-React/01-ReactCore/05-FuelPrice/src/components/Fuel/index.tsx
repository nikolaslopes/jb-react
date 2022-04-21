import { useEffect, useState } from 'react'
import { FiEdit, FiEdit2 } from 'react-icons/fi'

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
  InfoText,
  SaveButton,
  SaveIcon,
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

      <SettingsIcon onClick={toggleEditMode} />

      <Panel>
        {editMode && (
          <Row>
            <InfoText>
              <FiEdit2 />
              Altere o preço do item e salve
            </InfoText>
          </Row>
        )}

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

        {editMode && (
          <Row>
            <SaveButton>
              <SaveIcon />
              Salvar
            </SaveButton>
          </Row>
        )}
      </Panel>
    </Container>
  )
}
