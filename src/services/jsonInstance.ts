import axios, { AxiosInstance } from "axios"
import { jsonAPIConfig } from "./api"

export const jsonInstance: AxiosInstance = axios.create({
  baseURL: jsonAPIConfig.baseURL,
  responseType: "json",
})
