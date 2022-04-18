import styled from 'styled-components'
import imageGasStation from '../../assets/images/gas-station.jpg'

export const Container = styled.div`
  background: url(${imageGasStation});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;
`

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 48px;

  color: ${({ theme }) => theme.colorGrey200};
  content: 'a';
`
