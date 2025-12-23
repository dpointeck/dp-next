import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getPostBySlug } from '../../lib/post'

const fetchPost = createServerFn({ method: 'GET' })
  .inputValidator((d: string) => d)
  .handler(async ({ data }) => {
    return getPostBySlug(data)
  })

export const Route = createFileRoute('/journal/$slug')({
  component: PostPage,
  loader: ({ params }) => fetchPost({ data: params.slug }),
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.title || 'Post' },
      { name: 'description', content: loaderData?.metadesc || '' },
    ],
    links: [
      {
        rel: 'canonical',
        href: `https://www.daniel-pointecker.net/journal/${loaderData?.slug}`,
      },
    ],
  }),
})

function PostPage() {
  const post = Route.useLoaderData()

  return (
    <div className="relative z-50">
      <h1 className="text-center text-3xl md:text-4xl font-bold">{post.title}</h1>
      <article
        className="prose max-w-2xl mx-auto relative z-50 mt-8 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
