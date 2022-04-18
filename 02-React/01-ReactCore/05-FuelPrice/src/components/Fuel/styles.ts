import styled from 'styled-components'

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 48px;

  color: ${({ theme }) => theme.colorGrey200};
  content: 'a';
`
