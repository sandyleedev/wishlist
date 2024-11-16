import styled from "styled-components"
import { useState } from "react"
import { imageAxios } from "@/infra/axiosConfig"

const Wrapper = styled.div`
    background-color: #fffae4;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3vw;
`

const Img = styled.img`
    width: 60vw;
`

export const NewList = () => {
    const [file, setFile] = useState(null)
    const [imgUrl, setImgUrl] = useState("")
    const [uploading, setUploading] = useState(false)

    const handleImageUpload = (e: any) => {
        const uploadedFile = e.target.files[0]
        const url = URL.createObjectURL(uploadedFile)
        setImgUrl(url)
        setFile(uploadedFile)
    }

    const handleSubmit = async () => {
        if (!file) return

        setUploading(true)

        const formData = new FormData()
        formData.append("file", file)

        try {
            const { data } = await imageAxios.post("/remove-bg", formData)

            const imageBlob = new Blob([data], { type: "image/png" })
            const resultUrl = URL.createObjectURL(imageBlob)

            setImgUrl(resultUrl)
        } catch (e) {
            console.error("Error uploading image!", e)
        } finally {
            setUploading(false)
        }
    }

    return (
        <>
            <Wrapper>
                make a new wish!
                <input type="file" onChange={handleImageUpload} />
                <Img id="preview" src={imgUrl} />
                {!uploading ? (
                    <button onClick={handleSubmit} disabled={uploading}>
                        SUBMIT{" "}
                    </button>
                ) : (
                    <></>
                )}
                {uploading ? <div>Processing...</div> : <></>}
            </Wrapper>
        </>
    )
}

export default NewList
