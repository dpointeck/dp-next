import { Link } from '@tanstack/react-router'
import { IconTwitter, IconGithub, IconAbout, IconJournal, IconResources, IconUses } from '../svg'
import './Nav.css'

const socialLinks = [
  { name: 'twitter', icon: IconTwitter, url: 'https://twitter.com/home' },
  { name: 'github', icon: IconGithub, url: 'https://github.com/dpointeck' },
]

const pages = [
  { name: 'about', href: '/about', icon: IconAbout },
  { name: 'journal', href: '/journal', icon: IconJournal },
  { name: 'resources', href: '/resources', icon: IconResources },
  { name: 'uses', href: '/uses', icon: IconUses },
]

function Brand({ profiles }: { profiles: typeof socialLinks }) {
  return (
    <div className="brand mt-4 w-full md:w-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold mr-4 flex items-center dark:text-slate-200" aria-label="daniel pointecker">
        <div className="brand__image-wrap p-1 rounded-full mr-4">
          <img src="/images/daniel_tanja.jpg" alt="Daniel & Tanja" className="rounded-full h-10 w-10" />
        </div>
        <span>daniel pointecker</span>
      </Link>
      <nav className="social-nav flex items-center">
        {profiles.map((link) => (
          <a href={link.url} key={link.name} aria-label={link.name} target="_blank" rel="noopener noreferrer">
            <link.icon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </a>
        ))}
      </nav>
    </div>
  )
}

function Menu({ pages: menuPages }: { pages: typeof pages }) {
  return (
    <nav className="nav font-mono text-sm">
      {menuPages.map((page) => (
        <Link to={page.href} key={page.name}>
          <page.icon className="fill-slate-700 dark:fill-slate-200" />
          <span>{page.name}</span>
        </Link>
      ))}
    </nav>
  )
}

export function MobileNav() {
  return (
    <div className="mobileMenu font-mono text-sm">
      <nav>
        {pages.map((page) => (
          <Link to={page.href} key={page.name} aria-label={page.name}>
            <page.icon className="fill-slate-700 dark:fill-slate-200" />
            <span>{page.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export function Nav() {
  return (
    <div className="container mx-auto text-gray-800 relative">
      <div className="nav-container w-full p-4 md:px-10 pb-10 pt-0 flex flex-wrap items-start mt-5">
        <header className="w-full flex items-center justify-between relative z-50">
          <Brand profiles={socialLinks} />
          <Menu pages={pages} />
        </header>
      </div>
      <div className="absolute top-[6rem] left-[-1rem] h-[600px] w-[340px] md:w-[400px] md:h-[700px] text-gray-500 max-w-md bg-[url('/images/dots.svg')] bg-[length:160px_160px]" />
      <div className="absolute top-[-12rem] right-[-0.75rem] hidden md:w-[400px] md:h-[700px] lg:block text-gray-900 max-w-md bg-[url('/images/dots.svg')] bg-[length:160px_160px]" />
    </div>
  )
}
