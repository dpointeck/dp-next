import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { PageHeader } from '../../components/PageHeader'
import { IconPlus } from '../../svg'
import { getPostsByYear } from '../../lib/post'
import './index.css'

const fetchPostsByYear = createServerFn({ method: 'GET' }).handler(async () => {
  return getPostsByYear()
})

export const Route = createFileRoute('/journal/')({
  component: JournalPage,
  loader: () => fetchPostsByYear(),
  head: () => ({
    meta: [
      { title: 'Journal' },
      { name: 'description', content: 'My journal about work and side projects' },
    ],
    links: [
      { rel: 'canonical', href: 'https://www.daniel-pointecker.net/journal' },
    ],
  }),
})

function JournalPage() {
  const posts = Route.useLoaderData()

  return (
    <>
      <PageHeader>
        <span>Journal</span>
      </PageHeader>
      <PostsListYears posts={posts} />
    </>
  )
}

function PostsListYears({
  posts,
}: {
  posts: { year: number; posts: { slug: string; title: string; date: string }[] }[]
}) {
  return (
    <div className="styledPostsList relative z-50 max-w-xl mx-auto">
      {posts.map((year) => (
        <div key={year.year} className="mt-16">
          <h2 className="font-mono text-4xl">{year.year}</h2>
          <hr />
          <ul>
            {year.posts.map((post) => (
              <li className="mt-4" key={post.slug}>
                <Link
                  to="/journal/$slug"
                  params={{ slug: post.slug }}
                  className="md:text-xl font-thin truncate pr-3 flex items-end"
                >
                  <span className="text-xs md:text-sm font-mono mr-3 text-gray-500 dark:text-slate-50/50">
                    {post.date}
                  </span>
                  <span className="truncate block">{post.title}</span>
                </Link>
                <Link
                  to="/journal/$slug"
                  params={{ slug: post.slug }}
                  className="readMoreLink font-mono flex"
                >
                  <span className="mr-3">read full article</span>
                  <span className="arrow">
                    <IconPlus className="h-5 w-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
