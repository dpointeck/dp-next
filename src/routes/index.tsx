import { createFileRoute } from '@tanstack/react-router'
import './index.css'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: 'Daniel Pointecker - software dev',
      },
      {
        name: 'description',
        content:
          "Hi there! I'm Daniel a software dev from 🇦🇹. Checkout posts around web development and software engineering plus all kinds of useful resources",
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.daniel-pointecker.net',
      },
    ],
  }),
})

function HomePage() {
  return (
    <div className="max-w-2xl mx-auto mt-16 md:mt-24">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-primary leading-tight tracking-tight">
        Hi, I'm Daniel.
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-secondary">
        I'm a software developer from 🇦🇹 focused on frontend development.
        This site is a collection of things I constantly forget and
        have to search every time I need them. If there's something helpful for
        you, feel free to grab it.
      </p>
    </div>
  )
}
