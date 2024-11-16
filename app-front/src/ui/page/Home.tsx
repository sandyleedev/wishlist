import styled from "styled-components"
import ItemBox from "@/ui/component/ItemBox"

const Wrapper = styled.div`
    background-color: #fffae4;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3vw;
`

const Title = styled.span`
    margin-top: 5vh;
    padding-bottom: 2vh;
    font-weight: 900;
    font-size: 5vw;
    font-family: Arial;
`

const Button = styled.button`
    background: none;
    border: none;
    font-size: 5vw;
`

export const Home = ({ data }: { data: any }) => {
    console.log(data)

    const moveToMakeWish = () => {
        window.location.href = "/new"
    }

    return (
        <>
            <Wrapper>
                <Title>Wishlist of this month</Title>
                <Button onClick={moveToMakeWish}>💭</Button>
                <ItemBox></ItemBox>
            </Wrapper>
        </>
    )
}

export default Home
