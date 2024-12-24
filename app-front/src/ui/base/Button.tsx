import styled from "styled-components"
import { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode
  onClick?: any
  width?: string
  height?: string
}

export const Button = styled.button<ButtonProps>`
  border: none;
  color: white;
  border-radius: 5px;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`

export const BaseButton = (props: ButtonProps) => {
  const { children, onClick } = props

  return <Button onClick={onClick}>{children}</Button>
}

export default BaseButton
