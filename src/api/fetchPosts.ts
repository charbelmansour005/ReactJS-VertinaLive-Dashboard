import { AxiosResponse } from "axios"
import { postsURL } from "./api"
import { jsonInstance } from "./jsonInstance"

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export async function fetchPosts() {
  const response: AxiosResponse = await jsonInstance.get(`/${postsURL}`)

  const data: Posts[] = response.data

  return data
}
