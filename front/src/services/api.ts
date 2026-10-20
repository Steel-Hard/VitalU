import axios, { AxiosInstance } from "axios"
const url = 'https://vitalu.onrender.com/'

export const defaultInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json"
    }
});

const { token } = localStorage

export const userInteraction: AxiosInstance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
});
