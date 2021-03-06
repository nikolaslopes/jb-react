import styled from 'styled-components'
import imageGasStation from '../../assets/images/gas-station.jpg'
import { FiSave, FiSettings } from 'react-icons/fi'

export const Container = styled.div`
  background: url(${imageGasStation});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  height: 100vh;

  text-align: center;
`

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 48px;
  padding-top: 10px;

  color: ${({ theme }) => theme.colorGrey200};
`

export const SettingsIcon = styled(FiSettings)`
  color: ${({ theme }) => theme.colorGrey200};
  font-size: 32px;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;
`

export const Panel = styled.section`
  width: 300px;
  height: 500px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colorGrey100};
  position: relative;
  left: calc(100vw - 350px);
  margin-top: 60px;
`

export const Box = styled.div`
  width: 135px;
  height: 65px;

  background-color: ${({ theme }) => theme.colorBlue200};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;

  justify-content: space-around;
  padding-top: 15px;
`

export const FuelText = styled.span`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
`

export const FuelPrice = styled.span`
  font-family: 'Digital-7 Mono', sans-serif;
  color: ${({ theme }) => theme.colorYellow600};
  font-size: 3.5rem;
`

export const InfoText = styled.span`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.colorBlue200};
  border: none;
  color: ${({ theme }) => theme.colorWhite};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  transition: all 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    filter: brightness(0.7);
  }
`

export const SaveIcon = styled(FiSave)`
  color: ${({ theme }) => theme.colorWhite};
  font-size: 32px;
  margin-right: 10px;
`

export const FuelInput = styled.input`
  font-family: 'Digital-7 Mono', sans-serif;
  color: ${({ theme }) => theme.colorYellow600};
  font-size: 3.5rem;

  background: none;
  border: none;
  outline: none;

  width: 100%;
  text-align: center;
`
