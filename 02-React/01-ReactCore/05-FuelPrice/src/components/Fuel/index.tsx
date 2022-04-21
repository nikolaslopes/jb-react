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
  FuelInput,
} from './styles'
import { FuelProps, IFuel } from './types'

export function Fuel({ editMode, toggleEditMode }: FuelProps) {
  const [fuels, setFuels] = useState<IFuel[]>()

  console.log(fuels)

  async function fetchAndUpdateData() {
    const data = await getFuel()

    setFuels(data)
  }

  useEffect(() => {
    fetchAndUpdateData()
  }, [])

  function onUpdatePrice(fuelId: number, price: string) {
    const updatedFuels = fuels?.map((fuel) => {
      if (fuel.id === fuelId) {
        fuel.price = Number(price)
      }

      return fuel
    })

    setFuels(updatedFuels)
  }

  function onSave() {
    // * obter combustiveis com valores alterados
    // * atualizar esses combustíveis na API
  }

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
              {editMode ? (
                <FuelInput
                  type="number"
                  value={fuel.price}
                  onChange={(event) =>
                    onUpdatePrice(fuel.id, event.target.value)
                  }
                  maxLength={5}
                />
              ) : (
                <FuelPrice>{fuel.price}</FuelPrice>
              )}
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
