import axios ,{AxiosInstance} from "axios"
const url = 'http://localhost:3030'

export const defaultInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers:{
        "Content-Type": "application/json"
    }
});

export const userInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers:{
        "Content-Type": "application/json"
    }
});