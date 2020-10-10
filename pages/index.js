import styled from "styled-components";

const Hi = styled.h1`
  .hi {
    &__wavy {
      font-size: 2.25rem;
      margin-left: 3rem;
      margin-right: 1rem;

      @media (min-width: 768px) {
        font-size: 5rem;
        margin-left: 3rem;
        margin-right: 2rem;
      }
    }
    &__top {
      font-size: 1.5rem;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
    &__daniel {
      font-size: 20vw;
      line-height: 1;

      @media (min-width: 768px) {
        font-size: 8.75rem;
      }
    }
    &__pointecker {
      font-size: 12vw;
      line-height: 1;
      margin-left: 3rem;

      @media (min-width: 768px) {
        font-size: 6rem;
      }
    }
  }
`;

export default function IndexPage() {
  return (
    <div class="container p-4 md:p-10 mx-auto">
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
    </div>
  );
}
