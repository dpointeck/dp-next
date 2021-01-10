import React from "react";
import Link from "next/link";
import styled from "styled-components";

import IconTwitter from "../svg/twitter.svg";
import IconGithub from "@svg/github.svg";

import IconAbout from "@svg/about.svg";
import IconJournal from "@svg/journal.svg";
import IconResources from "@svg/resources.svg";
import IconUses from "@svg/uses.svg";

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

const StyledHeader = styled.div`
  position: relative;

  .dots1 {
    top: 6rem;
    left: -1rem;
  }

  .dots2 {
    top: -12rem;
    right: -0.75rem;
  }
`;

const StyledContainer = styled.div`
  background-color: transparent;
  background-image: transparent;
  border-radius: 2rem;
  position: relative;
`;

const StyledNav = styled.nav`
  display: none;
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;

  &:after {
    content: "";
    position: absolute;
    top: -5rem;
    left: 0;
    width: 100%;
    height: 12rem;
    background-image: ${(props) => props.theme.gradient[100]};
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    z-index: -1;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:nth-child(1) svg {
      height: 3.125rem;
    }

    &:nth-child(2) svg {
      height: 2.5rem;
    }

    &:nth-child(3) svg {
      height: 2.5rem;
    }

    &:nth-child(4) svg {
      height: 2rem;
      margin-left: -0.75rem;
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

  @media (min-width: ${(props) => props.theme.screens.md}) {
    display: flex;
  }
`;

const StyledBrand = styled.div`
  .brand__image-wrap {
    background-image: linear-gradient(to bottom, #fff95a, #fff22e);
  }

  .social-nav a:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

const Dots = styled.div`
  position: absolute;
  width: 340px;
  height: 600px;
  color: black;
  background-image: url("/images/dots.svg");
  background-size: 160px 160px;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    width: 400px;
    height: 700px;
  }
`;

const Brand = ({ profiles }) => {
  return (
    <StyledBrand className="brand mt-4 w-full md:w-auto flex justify-between items-center">
      <Link href="/">
        <a className="text-xl font-bold mr-4 flex items-center">
          <div className="brand__image-wrap p-1 rounded-full mr-4">
            <img
              src="/images/daniel_tanja.jpg"
              alt="Daniel & Tanja"
              className="rounded-full h-10 w-10"
            />
          </div>
          <span>daniel pointecker</span>
        </a>
      </Link>
      <nav className="social-nav flex items-center">
        {profiles.map((link) => {
          return (
            <a
              href={link.url}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(link.icon, {
                className: "w-5 h-5",
              })}
            </a>
          );
        })}
      </nav>
    </StyledBrand>
  );
};

const StyledMobileMenu = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-image: ${(props) => props.theme.gradient[100]};
  z-index: 100;
  padding: 0.5rem 2rem;

  nav {
    display: flex;
    max-width: 480px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.75rem;
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:nth-child(1) svg {
      height: 2rem;
    }

    &:nth-child(2) svg {
      height: 1.5rem;
    }

    &:nth-child(3) svg {
      height: 1.5rem;
    }

    &:nth-child(4) svg {
      height: 1.25rem;
      margin-left: -0.75rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.md}) {
    display: none;
  }
`;

const Menu = ({ pages }) => {
  return (
    <StyledNav className="font-mono text-sm">
      {pages.map((page) => (
        <Link href={page.href} key={page.name}>
          <a>
            {React.createElement(page.icon)}
            <span>{page.name}</span>
          </a>
        </Link>
      ))}
    </StyledNav>
  );
};

export const MobileNav = (props) => {
  return (
    <StyledMobileMenu className="font-mono text-sm">
      <nav>
        {pages.map((page) => (
          <Link href={page.href} key={page.name}>
            <a>
              {React.createElement(page.icon)}
              <span>{page.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </StyledMobileMenu>
  );
};

export function Nav() {
  return (
    <StyledHeader className="container mx-auto text-gray-800">
      <StyledContainer className="w-full p-4 md:px-10 pb-10 pt-0 flex flex-wrap items-start mt-5">
        <header className="w-full flex items-center justify-between relative z-50">
          <Brand profiles={socialLinks} />
          <Menu pages={pages} />
        </header>
      </StyledContainer>
      <Dots className="dots1 absolute text-gray-500 max-w-md" />
      <Dots className="dots2 absolute hidden lg:block text-gray-900 max-w-md" />
    </StyledHeader>
  );
}
