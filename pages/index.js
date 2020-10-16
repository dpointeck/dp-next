import styled from 'styled-components';

const Hi = styled.h1`
  position: relative;
  z-index: 20;

  .hi {
    &__wavy {
      font-size: 2.25rem;
      margin-left: 3rem;
      margin-right: 1rem;

      @media (min-width: ${(props) => props.theme.screens.md}) {
        font-size: 5rem;
        margin-left: 3rem;
        margin-right: 2rem;
      }
    }
    &__top {
      font-size: 1.5rem;

      @media (min-width: ${(props) => props.theme.screens.md}) {
        font-size: 2rem;
      }
    }
    &__daniel {
      font-size: 20vw;
      line-height: 1;

      @media (min-width: ${(props) => props.theme.screens.md}) {
        font-size: 8.75rem;
      }
    }
    &__pointecker {
      font-size: 12vw;
      line-height: 1;
      margin-left: 3rem;

      @media (min-width: ${(props) => props.theme.screens.md}) {
        font-size: 6rem;
      }
    }
  }
`;

const StyledHomepage = styled.div``;

const StyledBgTile = styled.div`
  position: absolute;
  background-image: ${(props) => props.theme.gradient[100]};
  height: 14rem;
  width: 34rem;
  max-width: 100%;
  top: 6rem;
  left: 4rem;
  right: 1rem;
  border-radius: 2rem;
  z-index: -1;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    top: 12rem;
    height: 20rem;
    width: 40rem;
  }
`;

export default function IndexPage() {
  return (
    <StyledHomepage className='container p-4 md:p-10 mx-auto relative overflow-hidden md:overflow-visible'>
      <div className='relative'>
        <Hi className='hi font-mono'>
          <span className='hi__wavy'>👋</span>
          <span className='hi__top'>Hi there I'm</span>
          <br />
          <span className='hi__daniel'>daniel</span>
          <br />
          <span className='hi__pointecker text-gray-600'>pointecker</span>
          <StyledBgTile />
        </Hi>
      </div>
      <div className='max-w-3xl mx-auto mt-10 md:mt-16 relative z-30'>
        <p className='font-mono text-xl md:text-3xl leading-relaxed'>
          I'm an software engineer from 🇦🇹 focused on frontend development. This
          site is ment to be a collection of stuff I constantly forget and have
          to search everytime I need it. If here’s something helpful for you
          feel free to grab it.
        </p>
      </div>
    </StyledHomepage>
  );
}
