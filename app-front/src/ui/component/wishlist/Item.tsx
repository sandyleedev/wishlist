import styled from "styled-components"

const ItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  width: 90%;
  height: auto;
`
const Title = styled.div``

interface ItemProps {
  title: string
  url: string
  imgSrc: string
}

export const Item = (props: ItemProps) => {
  const { title, url, imgSrc } = props
  return (
    <>
      <ItemWrapper href={url} target="_blank" rel="noopener noreferrer">
        <Img src={imgSrc} alt={title} />
        <Title>{title}</Title>
      </ItemWrapper>
    </>
  )
}

export default Item
