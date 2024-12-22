import styled from "styled-components"
import { Button } from "@/ui/base/Button"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`

const LeftBtn = styled(Button)`
  background-color: #95daa6;
  flex-grow: 1;
`

const RightBtn = styled(Button)`
  background-color: pink;
  flex-grow: 1;
`

interface TwoButtonProps {
  id: number
  name: string
  url: string
  img: any
  saveItem: any
  removeItem: any
  isSaved: boolean
  setIsSaved: any
}

export const TwoButtons = (props: TwoButtonProps) => {
  const { id, name, url, img, saveItem, removeItem, isSaved, setIsSaved } = props

  const handleLeftBtn = () => {
    setIsSaved(!isSaved)

    if (!isSaved) {
      if (name == null || name == ""){
        alert("Please fill out the name!")
        setIsSaved(false)
        return
      }
      if (url == null || url == ""){
        alert("Please fill out the url!")
        setIsSaved(false)
        return
      }
      if (img == null){
        alert("Please upload an image!")
        setIsSaved(false)
        return
      }

      saveItem(id, name, url, img)
    }
  }

  return (
    <Wrapper>
      <LeftBtn onClick={handleLeftBtn}>{isSaved? "EDIT" : "SAVE"}</LeftBtn>
      <RightBtn
        onClick={() => {
          removeItem(id)
        }}
      >
        REMOVE
      </RightBtn>
    </Wrapper>
  )
}

export default TwoButtons
