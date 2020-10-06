import Link from "next/link";
import styled from "styled-components";

import IconTwitter from "../svg/twitter.svg";
import IconGithub from "../svg/github.svg";
import Pattern from "../svg/pattern.js";
import SvgPerson from "../svg/person.js";

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

const StyledContainer = styled.div`
  background-color: #fff22e;
  background-image: linear-gradient(to bottom, #fff95a, #fff22e);
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
`;

const StyledPattern = styled(Pattern)`
  color: rgba(32, 134, 0, 0.12);
  position: absolute;
  top: -1.9rem;
  right: -1.9rem;
`;

const StyledNav = styled.nav`
  background: #fff22e;
  padding: 1rem 2rem;
  border-radius: 1rem;
  position: relative;
  z-index: 10;
  a {
    display: inline-block;
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      &:nth-child(1) {
        transform: rotate(3deg);
      }

      &:nth-child(2) {
        transform: rotate(-3deg);
      }

      &:nth-child(3) {
        transform: rotate(2.5deg);
      }

      &:nth-child(4) {
        transform: rotate(-2.8deg);
      }
    }
  }
`;

export default function Nav() {
  return (
    <div className="container mx-auto text-gray-800">
      <StyledContainer className="w-full p-10 flex flex-wrap items-start mt-10">
        <StyledPattern color="#fff22a" />
        <header className="w-full flex items-center justify-between">
          <div className="brand flex items-center">
            <Link href="/">
              <a className="text-xl font-bold mr-4 flex items-center">
                <div className="p-1 rounded-full bg-blue-500 mr-4">
                  <img
                    src="/images/daniel_tanja.jpg"
                    alt="Daniel & Tanja"
                    className="rounded-full"
                  />
                </div>
                <span>daniel pointecker</span>
              </a>
            </Link>
            <nav className="flex items-center">
              {socialLinks.map((link) => {
                return (
                  <a
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.createElement(link.icon, {
                      className: "w-6 h-6 mr-3",
                    })}
                  </a>
                );
              })}
            </nav>
          </div>
          <StyledNav>
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/journal">
              <a>journal</a>
            </Link>
            <Link href="/uses">
              <a>uses</a>
            </Link>
            <Link href="/resources">
              <a>resouces</a>
            </Link>
          </StyledNav>
        </header>
        <div class="mt-4 w-full flex justify-end relative z-30">
          <SvgPerson />
        </div>
      </StyledContainer>
    </div>
  );
}
