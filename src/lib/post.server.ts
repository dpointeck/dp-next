import { createServerFn } from '@tanstack/react-start'
import { getPostBySlug, getPostsByYear } from './post'

export const fetchPost = createServerFn({ method: 'POST' })
  .inputValidator((d: string) => d)
  .handler(async ({ data }) => {
    return getPostBySlug(data)
  })

export const fetchPostsByYear = createServerFn({ method: 'GET' }).handler(
  async () => {
    return getPostsByYear()
  }
)
