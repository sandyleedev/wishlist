import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import LoadingComponent from "@/ui/component/LoadingComponent"
import UploaderComponent from "@/ui/component/UploaderComponent"

interface itemType {
    url: any
    x: any
    y: any
    width: any
    height: any
}
const RenderList = () => {
    const [imgUrl, setImgUrl] = useState("")
    const [metadata, setMetadata] = useState<itemType[]>([])
    const [isUploaded, setIsUploaded] = useState(false)
    const [loading, setLoading] = useState(false)

    const uploadImages = async (files: File[]) => {
        try {
            const formData = new FormData()

            const urls = [
                "https://www.29cm.co.kr/",
                "https://www.29cm.co.kr/",
                "https://www.29cm.co.kr/",
                "https://www.29cm.co.kr/",
            ]

            const fileArray = Array.from(files);

            fileArray.forEach((file) => {
                formData.append('files', file);
            });

            urls.forEach((url) => {
                formData.append('urls', url);
            });

            const response: AxiosResponse<any, any> = await axios.post("http://127.0.0.1:8000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })

            const { data } = response

            const iframe = document.createElement('iframe');
            iframe.srcdoc = data;
            iframe.style.width = '500px';
            iframe.style.height = '500px';
            iframe.style.border = 'none';
            document.getElementById('collage-container')?.appendChild(iframe);

            setLoading(false)
        } catch (error) {
            console.error("Error uploading images:", error)
            setLoading(false)
        }
    }


    const handleFileSelect = (event) => {
        const files = event.target.files
        if (files.length === 4) {
            uploadImages(files)
            setIsUploaded(true)
            setLoading(true)
        } else {
            alert("4개의 이미지를 선택해주세요.")
        }
    }

    return (
        <div>
            {!isUploaded ? <UploaderComponent onUpload={handleFileSelect} /> : <></>}
            <img id="preview" src={imgUrl} alt={""}/>
            <div id="collage-container">{/* iframe이 여기에 추가됨 */}</div>
            {loading ? <LoadingComponent /> : <></>}
        </div>
    )
}

export default RenderList
