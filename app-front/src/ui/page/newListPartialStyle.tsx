import styled from "styled-components"
import { Button } from "@/ui/base/Button"

export const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vw;
  font-style: italic;
`

export const GridWrapper = styled.div`
  display: grid;
  gap: 10px; /* 아이템 간의 간격 */
  padding: 10px;
  /* 2x2 그리드 레이아웃 */
  //grid-template-columns: repeat(2, 1fr);
  //grid-template-rows: repeat(2, 1fr);
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 10px;
  width: 94vw;
`

export const GridItem = styled.div`
  background-color: #9ebeff;
  border-radius: 8px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

export const Title = styled.div`
  color: black;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`

export const AddButton = styled.div`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-weight: 700;
  padding: 10px;
  text-align: center;
  flex: 1;
`
