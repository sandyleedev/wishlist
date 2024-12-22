import styled from "styled-components"
import ItemBox from "@/ui/component/upload/ItemBox"

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
    //text-shadow:
    //  1.5px 1.5px 0px #fff,  /* 우측 상단 */
    //  -1.5px -1.5px 0px #fff, /* 좌측 하단 */
    //  1.5px -1.5px 0px #fff,  /* 우측 하단 */
    //  -1.5px 1.5px 0px #fff;  /* 좌측 상단 */
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
    console.log(data)

    const moveToMakeWish = () => {
        window.location.href = "/upload"
    }

    return (
        <>
            <Wrapper>
                <Title>🧤 Wishlist</Title>
                <Text>🍞🍀🍎🕯</Text>
                <Button onClick={moveToMakeWish}>➡️ MAKE A NEW WISH 💭</Button>
            </Wrapper>
        </>
    )
}

export default Home
