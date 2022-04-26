import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.h3`
  margin-top: 20px;
  margin-bottom: 40px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: #fafafa;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

export const ProductContent = styled(Link)`
  padding-top: 30px;
  text-decoration: none;
  cursor: pointer;
  color: #1a1a1a;
`

export const ProductImage = styled.img`
  width: 50%;
  height: 50%;

  border-radius: 5px;
`
