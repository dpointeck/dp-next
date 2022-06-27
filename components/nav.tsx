import React from "react";
import Link from "next/link";

import { IconTwitter } from "@svg/index";
import { IconGithub } from "@svg/index";

import { IconAbout } from "@svg/index";
import { IconJournal } from "@svg/index";
import { IconResources } from "@svg/index";
import { IconUses } from "@svg/index";

import styles from './nav.module.scss';

const socialLinks = [
  {
    name: "twitter",
    icon: IconTwitter,
    url: "https://twitter.com/home",
  },
  {
    name: "github",
    icon: IconGithub,
    url: "https://github.com/dpointeck",
  },
];

const pages = [
  {
    name: "about",
    href: "/about",
    icon: IconAbout,
  },
  {
    name: "journal",
    href: "/journal",
    icon: IconJournal,
  },
  {
    name: "resources",
    href: "/resources",
    icon: IconResources,
  },
  {
    name: "uses",
    href: "/uses",
    icon: IconUses,
  },
];

type Props = {
  children: React.ReactNode;
  className?: string;
}


const Brand = ({ profiles }: any) => {
  return (
    <div className={`${styles.brand} mt-4 w-full md:w-auto flex justify-between items-center`}>
      <Link href="/">
        <a className="text-xl font-bold mr-4 flex items-center dark:text-slate-200" aria-label="daniel pointecker">
          <div className={`${styles['brand__image-wrap']} p-1 rounded-full mr-4`}>
            <img
              src="/images/daniel_tanja.jpg"
              alt="Daniel & Tanja"
              className="rounded-full h-10 w-10"
            />
          </div>
          <span>daniel pointecker</span>
        </a>
      </Link>
      <nav className={`${styles['social-nav']} flex items-center`}>
        {profiles.map((link: any) => {
          return (
            <a
              href={link.url}
              key={link.name}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(link.icon, {
                className: "w-5 h-5 dark:text-slate-200",
              })}
            </a>
          );
        })}
      </nav>
    </div>
  );
};


const Menu = ({ pages }: any) => {
  return (
    <nav className={`${styles.nav} font-mono text-sm`}>
      {pages.map((page: any) => (
        <Link href={page.href} key={page.name}>
          <a aria-label={page.name}>
            {React.createElement(page.icon)}
            <span>{page.name}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export const MobileNav = (props: any) => {
  return (
    <div className={`${styles.mobileMenu} font-mono text-sm`}>
      <nav>
        {pages.map((page: any) => (
          <Link href={page.href} key={page.name}>
            <a aria-label={page.name}>
              {React.createElement(page.icon)}
              <span>{page.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export function Nav() {
  return (
    <div className="container mx-auto text-gray-800 relative">
      <div className={`${styles.container} w-full p-4 md:px-10 pb-10 pt-0 flex flex-wrap items-start mt-5`}>
        <header className="w-full flex items-center justify-between relative z-50">
          <Brand profiles={socialLinks} />
          <Menu pages={pages} />
        </header>
      </div>
      <div className="absolute top-[6rem] left-[-1rem] h-[600px] w-[340px] md:w-[400px] md:h-[700px] text-gray-500 max-w-md bg-[url('/images/dots.svg')] bg-[length:160px_160px]"/>
      <div className="absolute top-[-12rem] right-[-0.75rem] hidden md:w-[400px] md:h-[700px] lg:block text-gray-900  max-w-md bg-[url('/images/dots.svg')] bg-[length:160px_160px]" />
    </div>
  );
}
