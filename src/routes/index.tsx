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
    <div className="relative overflow-hidden md:overflow-visible">
      <div className="relative">
        <h1 className="hi font-mono">
          <span className="hi__wavy">👋</span>
          <span className="hi__top">Hi there I'm</span>
          <br />
          <span className="hi__daniel">daniel</span>
          <br />
          <span className="hi__pointecker">pointecker</span>
          <div className="bgTile" />
        </h1>
      </div>
      <div className="max-w-3xl mx-auto mt-10 md:mt-16 relative z-30">
        <p className="font-mono text-xl md:text-3xl leading-relaxed">
          I'm a software developer from 🇦🇹 focused on frontend development.
          This site is meant to be a collection of stuff I constantly forget and
          have to search every time I need it. If here's something helpful for
          you feel free to grab it.
        </p>
      </div>
    </div>
  )
}
