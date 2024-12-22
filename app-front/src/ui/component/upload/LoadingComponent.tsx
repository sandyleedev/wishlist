import Player from "lottie-react"
import snowflake from "../../../../public/lottie/snowflake.json"
import styled from "styled-components"

const Text = styled.div`
    position: absolute;
    top: 20vw;
    left: 20vw;
    width: 60vw;
    text-align: center;
    font-weight: 700;
    font-family: "Poppins", serif;
    font-size: 6vw;
    text-transform: uppercase;
`

export const LoadingComponent = () => {
    return (
        <>
            <Player
                autoplay
                loop
                animationData={snowflake}
                style={{ width: "100vw", position: "absolute", top: 0 }}
            />
            <Text>Making a wish ..</Text>
        </>
    )
}

export default LoadingComponent
