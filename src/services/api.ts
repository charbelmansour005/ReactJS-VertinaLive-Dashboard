import { z } from "zod"

const schema = z.object({
  baseURL: z.string().url(),
  posts: z.string(),
})

type ValidatedData = ReturnType<typeof schema.parse>

interface MyJsonAPIConfig extends ValidatedData {}

export const jsonAPIConfig: MyJsonAPIConfig = {
  baseURL: "https://jsonplaceholder.typicode.com",
  posts: "posts",
}
