import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000"

export const formDataAxios = axios.create({
    headers: {
        "Content-Type": "multipart/form-data",
    },
})