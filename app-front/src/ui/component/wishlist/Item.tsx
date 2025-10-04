import styled from "styled-components"

const ItemWrapper = styled.a<{ $rotate: number }>`
    width: clamp(160px, 22vw, 240px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transform: rotate(${(props) => props.$rotate}deg);
    text-decoration: none;
    color: inherit;

    &:hover {
        transform: scale(1.05) rotate(${(props) => props.$rotate}deg);
        transition: transform 0.2s ease;
        z-index: 10;
    }
`

const Img = styled.img`
  width: 90%;
  height: auto;
`

const Title = styled.div`
  margin-top: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`

interface ItemProps {
  title: string
  url: string
  imgSrc: string
  index: number
  total: number
}

/* index 기반 "랜덤 비슷한 값" 생성 (SSR/CSR 동일) */
const getDeterministicRotation = (index: number) => {
  // index로부터 항상 같은 값 나오게끔 간단한 해싱
  const base = ((index + 1) * 9301 + 49297) % 233280
  const rand = base / 233280 // 0 ~ 1 사이 값

  const magnitude = 1 + rand * 6
  if (index === 0) return magnitude // 첫 번째는 항상 양수
  return index % 2 === 1 ? -magnitude : magnitude
}

export const Item = (props: ItemProps) => {
  const { title, url, imgSrc, index } = props
  const rotate = getDeterministicRotation(index)

  return (
    <ItemWrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      $rotate={rotate}
    >
      <Img src={imgSrc} alt={title} />
      <Title>{title}</Title>
    </ItemWrapper>
  )
}

export default Item
