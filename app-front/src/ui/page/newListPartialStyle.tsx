import styled from "styled-components"
import { Button } from "@/ui/base/Button"

export const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3vw;
  font-style: italic;
`

export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%; /* 필요시 최대 크기 설정 */
  min-width: 100%;
  gap: 10px; /* 아이템 간의 간격 */
  padding: 10px;
  margin-top: 60px;

  /* 2x2 그리드 레이아웃 */
  //grid-template-columns: repeat(2, 1fr);
  //grid-template-rows: repeat(2, 1fr);
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
  background-color: whitesmoke;
  padding: 10px 15px;
  font-weight: 700;
  position: absolute;
  top: 10px;
  border-radius: 20px;
`

export const AddButton = styled(Button)`
  width: calc(100vw - 20px);
  height: 50px;
  font-size: 30px;
  color: grey;
  cursor: pointer;
`