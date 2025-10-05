import styled from "styled-components"

const Wrapper = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Button = styled.div`
  width: 30vw;
  min-width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;

  &:hover {
    font-weight: bold;
  }
`

const Icon = styled.div`
  font-size: 25px;
`
const Text = styled.div`
  font-size: 16px;
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
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
        <Button onClick={copyLink}>
          <Icon>🔗</Icon>
          <Text>Share wishlist url</Text>
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/upload"
          }}
        >
          <Icon>📋</Icon>
          <Text>Make a new wishlist</Text>
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/"
          }}
        >
          <Icon>🏠</Icon>
          <Text>Go to main page</Text>
        </Button>
      </Wrapper>
    </>
  )
}

export default Footer
