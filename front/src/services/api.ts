import axios ,{AxiosInstance} from "axios"
const url = process.env.VITE_URL_BASE

export const defaultInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers:{
        "Content-Type": "application/json"
    }
});