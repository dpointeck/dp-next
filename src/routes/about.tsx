import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../components/PageHeader'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: 'About' },
      {
        name: 'description',
        content: `Hi there! I'm Daniel Pointecker. I'm a self taught web developer from Schärding, Upper Austria. I'm making websites since 2014`,
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://www.daniel-pointecker.net/about' },
    ],
  }),
})

function AboutPage() {
  return (
    <div className="pt-0 pb-20">
      <PageHeader>About</PageHeader>
      <article className="prose-xl max-w-2xl mx-auto relative z-50 mt-8">
        <h2>Hi there! I'm Daniel Pointecker</h2>
        <p>
          a self-taught software developer from the picturesque town of
          Schärding, Upper Austria. Since diving into the world of web
          development in 2014, I've been on a thrilling journey of growth and
          discovery.
        </p>
        <p>
          My adventure in web development began with mastering the fundamentals:
          HTML, CSS, JavaScript, and PHP. As I delved deeper, my interests
          evolved towards the Node.js ecosystem, enhancing my projects with
          frameworks like Vue and React, and leveraging TypeScript for its
          powerful type-checking features.
        </p>
        <p>
          More recently, my professional path has led me to work on innovative
          projects for diagnostic systems in railway signaling. In this niche, I
          embrace the role of a full-stack developer, crafting system software
          in Rust. This transition not only signifies a pivot in my technical
          focus but also underlines my versatility and eagerness to tackle
          complex challenges.
        </p>
        <p>
          I'm captivated by web development's ever-changing landscape, which
          constantly offers new knowledge to absorb and fresh challenges to
          overcome.
        </p>
      </article>
    </div>
  )
}
