import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 22px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;

  p + p {
    margin-left: 22px;
  }

  margin-bottom: 22px;
`

export const Message = styled.p`
  font-size: 1.2rem;
`

export const TotalValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`
