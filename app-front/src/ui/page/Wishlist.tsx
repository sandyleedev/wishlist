import styled from "styled-components"
import Item from "@/ui/component/wishlist/Item"
import Footer from "@/ui/component/wishlist/Footer"
import { CDN_BASE_URL, WISHLIST_PREFIX } from "../../../constants"

const Wrapper = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  width: 100vw;
  min-height: 100vh;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
`

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 각 줄 중앙 정렬 */
  gap: 2vw;

  & > * {
    flex: 0 1 150px; /* 모든 카드 동일 크기 (150px) */
  }
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5vw;
  font-weight: 700;
  font-style: italic;
  margin: 20px 0;
`

export const Wishlist = (props: any) => {
  const { itemList } = props
  const bgColor = "#D9EAFD"

  return (
    <Wrapper $bgColor={bgColor}>
      <Title>Wishlist!</Title>
      <GridContainer>
        {itemList.map((item, idx) => (
          <Item
            key={item.id}
            title={item.title}
            url={item.url}
            imgSrc={`${CDN_BASE_URL}/${WISHLIST_PREFIX}/${item.wishlistId}/${item.img}`}
            index={idx}
            total={itemList.length}
          />
        ))}
      </GridContainer>
      <Footer />
    </Wrapper>
  )
}

export default Wishlist
