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

export function Fuel() {
  const [fuels, setFuels] = useState()

  return (
    <Container>
      <Title>Posto React JS</Title>
      <SettingsIcon />
      <Panel>
        <Row>
          <Box>
            <FuelText>a</FuelText>
          </Box>
          <Box>
            <FuelPrice>b</FuelPrice>
          </Box>
        </Row>

        <Row>
          <Box>
            <FuelText>a</FuelText>
          </Box>
          <Box>
            <FuelPrice>b</FuelPrice>
          </Box>
        </Row>

        <Row>
          <Box>
            <FuelText>b</FuelText>
          </Box>
          <Box>
            <FuelPrice>4.59</FuelPrice>
          </Box>
        </Row>

        <Row>
          <Box>
            <FuelText>a</FuelText>
          </Box>
          <Box>
            <FuelPrice>b</FuelPrice>
          </Box>
        </Row>
      </Panel>
    </Container>
  )
}
