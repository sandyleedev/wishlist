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
    background-color: rgba(198, 198, 198, 0.5);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.15s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }

    /* 🔹 PC에서는 적당한 크기 */
    width: 100%;
    max-width: 280px;
    height: auto;
    min-height: 380px;
    box-sizing: border-box;

    /* 🔹 모바일에서는 꽉 차게 */
    @media (max-width: 640px) {
        max-width: 90vw;
        min-height: 340px;
    }
`

const Preview = styled.img<{ $isSaved: boolean }>`
    width: 100%;
    max-width: 220px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    cursor: ${(props) => (props.$isSaved ? "default" : "pointer")};
    transition: opacity 0.2s ease;

    &:hover {
        opacity: ${(props) => (props.$isSaved ? "1" : "0.8")};
    }

    @media (max-width: 640px) {
        max-width: 80%;
    }
`

const ItemField = styled.a`
    width: 100%;
    font-size: 18px;
    text-align: center;
    text-decoration: underline;
    color: #1a1a1a;
    font-weight: 600;
    word-break: break-word;
    padding-bottom: 5px;
    transition: color 0.2s ease;

    &:hover {
        color: #4c6ef5;
    }
`

export const NewItem = (props: NewItemProps) => {
  const { id, saveItem, removeItem } = props
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [imgUrl, setImgUrl] = useState("")
  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")
  const [imgInput, setImgInput] = useState<any | null>(null)
  const [isSaved, setIsSaved] = useState(false)

  const handleImgClick = () => {
    if (!isSaved) fileInputRef.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        onChange={handleFileChange}
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
  )
}

export default NewItem
