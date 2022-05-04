import styled from 'styled-components'

export const Title = styled.h1`
  color: #afe0ce;
  padding-bottom: 30px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;

  input {
    width: 80%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-size: 18px;
    color: #2c2b3c;
  }

  label {
    margin-right: 10px;
    font-size: 20px;
    width: 10%;
    text-align: right;
    color: #afe0ce;
  }
`

export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  color: #0d1321;
  background-color: #afe0ce;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;

  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.7);
  }

  &:active {
    opacity: 0.6;
  }
`
