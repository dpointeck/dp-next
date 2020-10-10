import Link from "next/link";
import styled from "styled-components";

import IconTwitter from "../svg/twitter.svg";
import IconGithub from "../svg/github.svg";

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
    name: "uses",
    href: "/uses",
  },
  {
    name: "resources",
    href: "/resources",
  },
];

const StyledContainer = styled.div`
  background-color: transparent;
  background-image: transparent;
  border-radius: 2rem;
  position: relative;
`;

const StyledNav = styled.nav`
  display: none;
  background: #fff85c;
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;

  &:after {
    content: "";
    position: absolute;
    top: -5rem;
    left: 0;
    width: 100%;
    height: 16rem;
    background-image: ${props => props.theme.gradient[100]};
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    z-index: -1;
  }
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

  @media (min-width: ${props => props.theme.screens.md}) {
    display: block;
  }
`;

const StyledBrand = styled.div`
  .brand__image-wrap {
    background-image: linear-gradient(to bottom, #fff95a, #fff22e);
  }
`;

const Brand = ({ profiles }) => {
  return (
    <StyledBrand className="brand w-full md:w-auto flex justify-between items-center">
      <Link href="/">
        <a className="text-xl font-bold mr-4 flex items-center">
          <div className="brand__image-wrap p-1 rounded-full mr-4">
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
        {profiles.map((link) => {
          return (
            <a
              href={link.url}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(link.icon, {
                className: "w-5 h-5 mr-3",
              })}
            </a>
          );
        })}
      </nav>
    </StyledBrand>
  );
};

const Menu = ({ pages }) => {
  return (
    <StyledNav className="font-mono text-sm">
      {pages.map((page) => (
        <Link href={page.href} key={page.name}>
          <a>{page.name}</a>
        </Link>
      ))}
    </StyledNav>
  );
};

export default function Nav() {
  return (
    <div className="container mx-auto text-gray-800">
      <StyledContainer className="w-full p-4 md:p-10 flex flex-wrap items-start mt-10">
        <header className="w-full flex items-center justify-between">
          <Brand profiles={socialLinks} />
          <Menu pages={pages} />
        </header>
      </StyledContainer>
    </div>
  );
}
