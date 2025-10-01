import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #c5d3e8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Title = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: 600;
  font-size: 7vw;
  font-family: "Poppins", serif;
  text-transform: uppercase;
`

const Text = styled.span`
  font-size: 10vw;
`

const Button = styled.button`
  background-color: #eee;
  border: 1px solid #fff;
  border-radius: 15px;
  font-size: 5vw;
  padding: 5px 10px;
  color: #000;
  font-weight: 600;
`

export const Home = ({ data }: { data: any }) => {
  const goToUploadPage = () => {
    window.location.href = "/upload"
  }

  return (
    <>
      <Wrapper>
        <Title>🧤 Wishlist</Title>
        <Text>🍞🍀🍎🕯</Text>
        <Button onClick={goToUploadPage}>➡️ MAKE A NEW WISH 💭</Button>
      </Wrapper>
    </>
  )
}

export default Home
