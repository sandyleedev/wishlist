import { formDataAxios } from "@/infra/axiosConfig"
import NewItem from "@/ui/component/upload/NewItem"
import useItemManage from "@/ui/hook/useItemManage"
import {
  AddButton,
  ButtonWrapper,
  GridWrapper,
  Title,
  Wrapper,
} from "@/ui/page/newListPartialStyle"
import { useState } from "react"
import LoadingComponent from "@/ui/component/upload/LoadingComponent"

export const Upload = () => {
  const { itemArray, addItem, saveItem, removeItem } = useItemManage()
  const [isUploading, setIsUploading] = useState(false)

  const renderWishlist = async () => {
    console.log(itemArray)

    if (!itemArray || !itemArray[0].name) {
      alert("1개 이상의 아이템을 업로드해주세요!")
      return
    }

    setIsUploading(true)
    // array의 item들을 하나의 formdata로 만들기

    const formData = new FormData()

    itemArray.forEach((item, index) => {
      formData.append("titles", item.name)
      formData.append("urls", item.url)
      formData.append("images", item.img)
    })

    try {
      const res = await formDataAxios.post("/render-list", formData)
      const wishlist_id = res.data.data.wishlist_id
      window.location.href = `/wishlist/${wishlist_id}`
      setIsUploading(false)
    } catch (e) {
      console.error(e)
      alert("error occurred!")
      setIsUploading(false)
    }
  }

  return (
    <>
      {isUploading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <Wrapper>
          <>
            <Title>Make a new wish! ଘ(੭ˊᵕˋ)੭*❄️</Title>
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
            <ButtonWrapper>
              <AddButton onClick={addItem}>+ Add new item</AddButton>
              <AddButton onClick={renderWishlist}>🧚 Make Wishlist !</AddButton>
              <AddButton
                onClick={() => {
                  window.location.href = "/"
                }}
              >
                🏠 Go back to main page
              </AddButton>
            </ButtonWrapper>
          </>
        </Wrapper>
      )}
    </>
  )
}

export default Upload
