import React from "react";
import Link from "next/link";

import { IconTwitter } from "svg/index";
import { IconGithub } from "svg/index";

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
  },
  {
    name: "journal",
    href: "/journal",
  },
  {
    name: "resources",
    href: "/resources",
  },
  {
    name: "uses",
    href: "/uses",
  },
];

type Props = {
  children?: React.ReactNode;
  profiles: {name: string; icon: any; url: string}[];
  className?: string;
}


const Brand = ({ profiles }: Props) => {
  return (
    <div>
      <Link href="/" aria-label="daniel pointecker">
          <div>
            <img
              src="/images/daniel_tanja.jpg"
              alt="Daniel & Tanja"
            />
          </div>
          <span>daniel pointecker</span>
      </Link>
      <nav>
        {profiles.map((link: any) => {
          return (
            <a
              href={link.url}
              key={link.name}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              { link.name }
            </a>
          );
        })}
      </nav>
    </div>
  );
};


const Menu = ({ pages }: any) => {
  return (
    <nav>
      {pages.map((page: any) => (
        <Link href={page.href} key={page.name}>
            <span>{page.name}</span>
        </Link>
      ))}
    </nav>
  );
};


export function Nav() {
  return (
    <div>
      <div>
        <header>
          <Brand profiles={socialLinks}/>
          <Menu pages={pages} />
        </header>
      </div>
    </div>
  );
}
