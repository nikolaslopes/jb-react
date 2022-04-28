import styled from 'styled-components'

export const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;

  padding: 22px;

  justify-content: space-around;

  button {
    width: 16rem;
    height: 2.5rem;
  }

  span {
    padding-top: 32px;
  }
`

export const Message = styled.p`
  font-size: 1.2rem;
`

export const InputName = styled.input`
  font-size: 1.2rem;
  width: 16rem;
  height: 2.5rem;
`
