import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 10px;
`
const Icon = styled.div`
  width: 50px;
  height: 50px;
  font-size: 50px;
`

export const Island = () => {
  return (
    <>
      <Wrapper>
        <Icon>
          <a href="/upload">📋</a>
        </Icon>
        <Icon>
          <a href="/">🏠</a>
        </Icon>
      </Wrapper>
    </>
  )
}

export default Island
