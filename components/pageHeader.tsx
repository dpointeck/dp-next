import styled from "styled-components";

const StyledPageHeading = styled.h1`
  color: #1a202c;
  position: relative;
  z-index: 40;
  font-size: 4rem;

  &:before {
    content: "";

    display: block;
    height: 80%;
    width: 110%;
    position: absolute;
    top: 2.8rem;
    left: 1.5;
    z-index: -1;
    background-image: linear-gradient(to top right, #fff95a, #fff22e);
    border-radius: 1rem;
  }
`;

export default function PageHeader(props) {
  return (
    <div className="pt-4  pb-10 flex justify-center">
      <StyledPageHeading className="font-bold font-mono text-center text-accent-1">
        <span>{props.children}</span>
      </StyledPageHeading>
    </div>
  );
}
