import axios ,{AxiosInstance} from "axios"
const url = 'http://localhost:3030'

export const defaultInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers:{
        "Content-Type": "application/json"
    }
});


const {token} = localStorage

export const userInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
});