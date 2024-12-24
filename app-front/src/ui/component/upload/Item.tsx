import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Img = styled.img`
  width: 100%;
  display: flex;
`

export const Item = (props: { imgSrc: string }) => {
  const { imgSrc } = props
  return (
    <Wrapper>
      <Img src={imgSrc} />
    </Wrapper>
  )
}

export default Item
