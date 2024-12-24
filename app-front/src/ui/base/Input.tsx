import styled from "styled-components"
import { ChangeEvent } from "react"

interface BaseInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  id?: string
  name?: string
  value?: string
  placeholder?: string
}

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  background-color: white;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const BaseInput = (props: BaseInputProps) => {
  const { onChange, id, name, value, placeholder } = props

  return <Input onChange={onChange} id={id} name={name} value={value} placeholder={placeholder} />
}

export default BaseInput
