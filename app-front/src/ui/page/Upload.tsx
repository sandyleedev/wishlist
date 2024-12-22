import { formDataAxios } from "@/infra/axiosConfig"
import NewItem from "@/ui/component/upload/NewItem"
import useItemManage from "@/ui/hook/useItemManage"
import { AddButton, GridWrapper, Title, Wrapper } from "@/ui/page/newListPartialStyle"

export const Upload = () => {

  const { itemArray, addItem, saveItem, removeItem } = useItemManage()

  const renderWishlist = async () => {
    console.log("wishlist coming!")

    // array의 item들을 하나의 formdata로 만들기

    const formData = new FormData()

    itemArray.forEach((item, index) => {
      formData.append("titles", item.name)
      formData.append("urls", item.url)
      formData.append("images", item.img)
    })

    try {
      const res = await formDataAxios.post("/render-list", formData)
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  )
}

export default Upload
