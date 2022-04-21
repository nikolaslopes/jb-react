import { useEffect, useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'

import { getFuel, updatedFuel } from './services'
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
import { FuelProps, IFuelState } from './types'

export function Fuel({ editMode, toggleEditMode }: FuelProps) {
  const [fuels, setFuels] = useState<IFuelState[]>()

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
        fuel.updated = true
      }

      return fuel
    })

    setFuels(updatedFuels)
  }

  async function onSave() {
    // * obter combustiveis com valores alterados
    const changed = fuels?.filter((fuel) => fuel.updated === true)

    if (!changed) {
      toggleEditMode()
      console.log('no changes')
      return
    }

    // * atualizar esses combustíveis na API
    for (const changedFuel of changed) {
      const { updated, ...rest } = changedFuel

      await updatedFuel(rest)
    }

    fetchAndUpdateData()
    toggleEditMode()
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
            <SaveButton onClick={onSave}>
              <SaveIcon />
              Salvar
            </SaveButton>
          </Row>
        )}
      </Panel>
    </Container>
  )
}
