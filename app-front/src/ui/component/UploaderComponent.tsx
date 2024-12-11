import styled from "styled-components"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: lemonchiffon;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    gap: 20px;
`

const Text = styled.span`
    font-family: "Poppins", serif;
    font-weight: 700;
    font-size: 15px;
`

const Input = styled.input`
    padding-left: 30px;
`

export const UploaderComponent = (props: { onUpload: (event: any) => void }) => {
    const { onUpload } = props

    return (
        <>
            <Wrapper>
                <Text>Please select your wish items ! 💭</Text>
                <Input type="file" multiple onChange={onUpload} />
            </Wrapper>
        </>
    )
}

export default UploaderComponent
