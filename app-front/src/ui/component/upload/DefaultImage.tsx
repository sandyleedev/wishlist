import styled from "styled-components"

export const DefaultImage = (props: { onClick: any }) => {
  const Wrapper = styled.div`
    &:hover {
      cursor: pointer;
    }
  `
  const Img = styled.img`
    width: 90vw;
    filter: opacity(0.6);
  `

  return (
    <>
      <Wrapper onClick={props.onClick}>
        <Img src={"image/applejuice.png"} alt={"default"} />
      </Wrapper>
    </>
  )
}

export default DefaultImage
