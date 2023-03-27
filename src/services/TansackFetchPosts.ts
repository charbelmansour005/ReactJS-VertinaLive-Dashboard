import { AxiosResponse } from "axios"
import { jsonAPIConfig } from "./api"
import { jsonInstance } from "./jsonInstance"
import { Posts } from "../../types"

export async function fetchPosts() {
  const response: AxiosResponse = await jsonInstance.get(
    `/${jsonAPIConfig.posts}`
  )

  const data: Posts[] = response.data

  return data
}
