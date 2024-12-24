import styled from "styled-components"
import DefaultImage from "@/ui/component/upload/DefaultImage"
import { Input } from "@/ui/base/Input"
import TwoButtons from "@/ui/component/upload/TwoButtons"
import { ChangeEvent, useRef, useState } from "react"

interface NewItemProps {
  id: number
  name?: string
  url?: string
  img?: any
  saveItem: any
  removeItem: any
}

const Wrapper = styled.div`
  background-color: rgba(198, 198, 198, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px;
  width: 94vw;
  height: min-content;
`

const Preview = styled.img<{ $isSaved: boolean }>`
  width: 80vw;
  text-align: center;
  &:hover {
    cursor: ${(props) => (props.$isSaved ? "default" : "pointer")};
  }
`

const ItemField = styled.a`
  width: 100%;
  font-size: 20px;
  text-align: center;
  text-decoration: underline;
  padding-bottom: 5px;
`

export const NewItem = (props: NewItemProps) => {
  const { id, name, url, img, saveItem, removeItem } = props

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [imgUrl, setImgUrl] = useState("")

  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")
  const [imgInput, setImgInput] = useState<any | null>(null)

  const [isSaved, setIsSaved] = useState(false)

  const handleImgClick = () => {
    // 숨겨진 파일 입력 요소 클릭 트리거
    if (!isSaved) {
      fileInputRef.current?.click()
    }
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append(`file`, file)
      setImgInput(formData)

      // preview image
      const imageBlob = new Blob([file], { type: "image/png" })
      const resultUrl = URL.createObjectURL(imageBlob)

      setImgInput(imageBlob)
      setImgUrl(resultUrl)
    }
  }

  return (
    <>
      <Wrapper>
        {imgUrl ? (
          <Preview src={imgUrl} onClick={handleImgClick} $isSaved={isSaved} />
        ) : (
          <DefaultImage onClick={handleImgClick} />
        )}

        {/* hidden file uploader */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => {
            handleFileChange(e)
          }}
        />

        {isSaved ? (
          <ItemField href={urlInput} target="_blank" rel="noopener noreferrer nofollow">
            {nameInput}
          </ItemField>
        ) : (
          <>
            <Input
              id={"nameInput"}
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
              placeholder={"item name"}
              autoComplete="off"
            />
            <Input
              id={"urlInput"}
              onChange={(e) => setUrlInput(e.target.value)}
              value={urlInput}
              placeholder={"url"}
              autoComplete="off"
            />
          </>
        )}

        <TwoButtons
          id={id}
          name={nameInput}
          url={urlInput}
          img={imgInput}
          saveItem={saveItem}
          removeItem={removeItem}
          isSaved={isSaved}
          setIsSaved={setIsSaved}
        />
      </Wrapper>
    </>
  )
}

export default NewItem
