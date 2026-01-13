import { createFileRoute } from '@tanstack/react-router'
import { fetchPostWithNavigation } from '../../lib/post.server'
import { PostNavigation } from '../../components/PostNavigation'

export const Route = createFileRoute('/journal/$slug')({
  component: PostPage,
  loader: ({ params }) => fetchPostWithNavigation({ data: params.slug }),
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
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-primary tracking-tight leading-tight">{post.title}</h1>
      <article
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <PostNavigation prevPost={post.prevPost} nextPost={post.nextPost} />
    </div>
  )
}
