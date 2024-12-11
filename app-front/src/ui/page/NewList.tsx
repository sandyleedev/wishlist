import { useState } from "react"
import { htmlAxios, imageAxios } from "@/infra/axiosConfig"
import NewItem from "@/ui/component/NewItem"
import useItemManage from "@/ui/hook/useItemManage"
import { AddButton, GridWrapper, Title, Wrapper } from "@/ui/page/newListPartialStyle"

export const NewList = () => {
  const [file, setFile] = useState(null)
  const [imgUrl, setImgUrl] = useState("")
  const [uploading, setUploading] = useState(false)
  const [wishlistHTML, setWishlistHTML] = useState<string | null>(null)

  const { itemArray, addItem, saveItem, removeItem } = useItemManage()

  const handleImageUpload = (e: any) => {
    const uploadedFile = e.target.files[0]
    const url = URL.createObjectURL(uploadedFile)
    setFile(uploadedFile)
  }

  const handleSubmit = async () => {
    if (!file) return

    setUploading(true)

    const formData = new FormData()
    formData.append("file", file)

    try {
      const { data } = await imageAxios.post("/remove-bg", formData)

      const imageBlob = new Blob([data], { type: "image/png" })
      const resultUrl = URL.createObjectURL(imageBlob)
      setImgUrl(resultUrl)
    } catch (e) {
      console.error("Error uploading image!", e)
    } finally {
      setUploading(false)
    }
  }

  const renderWishlist = async () => {
    console.log("wishlist coming!")
    console.log(itemArray)
    const file = itemArray[0].img.get("file")
    console.log(file)

    // array의 item들을 하나의 formdata로 만들기

    const formData = new FormData()

    itemArray.forEach((item, index) => {
      formData.append("titles", item.mnae)
      formData.append("urls", item.url)
      formData.append("images", item.img.get("file"))
    })

    try {
      const { data } = await htmlAxios.post("/render-list", formData)
      setWishlistHTML(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Wrapper>
        {wishlistHTML ? (
          <div dangerouslySetInnerHTML={{ __html: wishlistHTML }} />
        ) : (
          <>
            <Title>make a new wish! 🧚‍♀️</Title>
            <GridWrapper>
              {itemArray.map((item) => (
                <NewItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  url={item.url}
                  img={item.img}
                  saveItem={saveItem}
                  removeItem={removeItem}
                />
              ))}
            </GridWrapper>
            <AddButton onClick={addItem}>+</AddButton>
            <AddButton onClick={renderWishlist}>Make Wishlist !</AddButton>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default NewList
