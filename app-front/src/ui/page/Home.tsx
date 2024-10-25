import styled from "styled-components";
import ItemBox from "@/ui/component/ItemBox";

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

export const Home = () => {
    return (
        <>
            <Wrapper>
                <Title>Wishlist of this month</Title>
                <ItemBox></ItemBox>
            </Wrapper>
        </>
    )
}

export default Home