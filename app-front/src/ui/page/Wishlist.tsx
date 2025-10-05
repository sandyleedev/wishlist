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
  display: grid;
  gap: 2vw;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
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

// 파스텔 톤 팔레트
const pastelColors = [
  "#FFFBF4", // 연베이지
  "#FDF7FF", // 연보라
  "#F4FBFF", // 연하늘
  "#F9FFF4", // 연민트
  "#FFF4F7", // 연핑크
  "#FFFBEA", // 연노랑
]

// 문자열 기반 deterministic 색상 선택
const getDeterministicBg = (seedStr: string) => {
  let hash = 0
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash * 31 + seedStr.charCodeAt(i)) % 233280
  }
  const index = hash % pastelColors.length
  return pastelColors[index]
}

export const Wishlist = (props: any) => {
  const { itemList } = props
  const bgColor = getDeterministicBg(itemList[0]?.wishlistId || "default")

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
