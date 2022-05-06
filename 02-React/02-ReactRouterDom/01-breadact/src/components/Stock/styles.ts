import styled from 'styled-components'

export const Header = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 22px;
    margin-left: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #fafafa;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`
