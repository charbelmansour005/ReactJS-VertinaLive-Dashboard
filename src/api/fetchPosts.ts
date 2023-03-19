import axios, { AxiosResponse } from "axios"
import { postsURL } from "./api"

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export async function fetchPosts() {
  const response: AxiosResponse = await axios.get(postsURL)

  const data: Posts[] = response.data

  return data
}
