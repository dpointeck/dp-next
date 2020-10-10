import styled from "styled-components";

import Dots from '../svg/dots'

const Hi = styled.h1`
  position: relative;
  z-index: 20;
  
  .hi {
    &__wavy {
      font-size: 2.25rem;
      margin-left: 3rem;
      margin-right: 1rem;

      @media (min-width: ${props => props.theme.screens.md}) {
        font-size: 5rem;
        margin-left: 3rem;
        margin-right: 2rem;
      }
    }
    &__top {
      font-size: 1.5rem;

      @media (min-width: ${props => props.theme.screens.md}) {
        font-size: 2rem;
      }
    }
    &__daniel {
      font-size: 20vw;
      line-height: 1;

      @media (min-width: ${props => props.theme.screens.md}) {
        font-size: 8.75rem;
      }
    }
    &__pointecker {
      font-size: 12vw;
      line-height: 1;
      margin-left: 3rem;

      @media (min-width: ${props => props.theme.screens.md}) {
        font-size: 6rem;
      }
    }
  }
`;

const StyledHomepage = styled.div`
  .dots1 {
    top: 0rem;
    left: -1rem;
  }
  
  .dots2 {
    top: -16rem;
    right: -.75rem;
  }
`;

export default function IndexPage() {
  return (
    <StyledHomepage className="container p-4 md:p-10 mx-auto relative">
      <div className="overflow-hidden">
        <Hi className="hi font-mono">
          <span className="hi__wavy">👋</span>
          <span className="hi__top">Hi there I'm</span>
          <br />
          <span className="hi__daniel">daniel</span>
          <br />
          <span className="hi__pointecker text-gray-600">pointecker</span>
        </Hi>
      </div>
      <div className="max-w-3xl mx-auto mt-10 md:mt-16">
        <p className="font-mono text-xl md:text-3xl leading-relaxed">
          This site is ment to be a collection of stuff, i constantly forget and
          have to search everytime I need it. So it’s kinda egoistictake but if
          here’s something helpfulf for youfeel free to grab it.
        </p>
      </div>
      <Dots className="dots1 absolute text-gray-500 max-w-md"/>
      <Dots className="dots2 absolute hidden lg:block text-gray-900 max-w-md"/>
    </StyledHomepage>
  );
}
