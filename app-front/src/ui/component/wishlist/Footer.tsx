import styled from "styled-components"

const Wrapper = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Button = styled.div`
  height: 50px;
  font-size: 50px;
`
export const Footer = () => {
  const copyLink = () => {
    const currentUrl = window.location.href // 현재 페이지의 URL을 가져옴
    navigator.clipboard
      .writeText(currentUrl) // 클립보드에 URL 복사
      .then(() => {
        alert("URL copied to clipboard!")
      })
      .catch((err) => {
        alert("Failed to copy URL: " + err)
      })
  }

  return (
    <>
      <Wrapper>
        <Button onClick={copyLink}>🔗</Button>
        <Button></Button>
      </Wrapper>
    </>
  )
}

export default Footer
