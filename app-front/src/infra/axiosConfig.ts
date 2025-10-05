import axios from "axios"

axios.defaults.baseURL = "/api/proxy"

export const formDataAxios = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
})