import axios, { AxiosInstance } from "axios"
import { baseURL } from "./api"

export const jsonInstance: AxiosInstance = axios.create({
  baseURL,
  responseType: "json",
})
