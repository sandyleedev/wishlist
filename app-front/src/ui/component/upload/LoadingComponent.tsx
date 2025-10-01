import snowflake from "../../../../public/lottie/snowflake.json"
import styled from "styled-components"
import dynamic from "next/dynamic"

const Player = dynamic(() => import("lottie-react"), { ssr: false })

const Text = styled.div`
  position: absolute;
  top: 40vh;
  left: 20vw;
  width: 60vw;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  font-style: italic;
`

export const LoadingComponent = () => {
  return (
    <>
      <Player
        autoplay
        loop
        animationData={snowflake}
        style={{ width: "100%", position: "absolute", top: 0 }}
      />
      <Text>Making a wish ! 🧚‍♀️</Text>
    </>
  )
}

export default LoadingComponent
