import styled from 'styled-components'
import imageGasStation from '../../assets/images/gas-station.jpg'
import { FiSettings } from 'react-icons/fi'

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
