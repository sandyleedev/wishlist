import styled from "styled-components"
import Item from "@/ui/component/wishlist/Item"

const Wrapper = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  width: 100vw;
  height: 100vh;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
`

const GridContainer = styled.div<{ $gridSize: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$gridSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.$gridSize}, 1fr);
  gap: 1vw;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5vw;
  font-weight: 700;
  font-style: italic;
  grid-column: 1 / -1; /* 타이틀이 그리드 전체를 차지하도록 설정 */
`

export const Wishlist = (props: any) => {
  const { itemList } = props

  const itemCount = itemList.length
  const bgColor = "#D9EAFD"

  const CDN_BASE_URL = "https://d2lknujd7fonfi.cloudfront.net"
  const WISHLIST_PREFIX = "wishlist"

  // gridSize 계산 (1~4: 2x2, 5~9: 3x3 등)
  const getGridSize = (count: number) => {
    return Math.ceil(Math.sqrt(count)) // 동적으로 더 큰 그리드 처리
  }

  const gridSize = getGridSize(itemCount)

  return (
    <Wrapper $bgColor={bgColor}>
      <Title>Wishlist!</Title>
      <GridContainer $gridSize={gridSize}>
        {itemList.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            url={item.url}
            imgSrc={`${CDN_BASE_URL}/${WISHLIST_PREFIX}/${item.wishlistId}/${item.img}`}
          />
        ))}
      </GridContainer>
    </Wrapper>
  )
}

export default Wishlist
