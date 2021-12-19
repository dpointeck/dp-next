import styled from "styled-components";

const StyledPageLayout = styled.div``;

export default function PageLayout(props:any) {
  return (
    <StyledPageLayout className="layout-page container mx-auto p-4 md:px-10">
      {props.children}
    </StyledPageLayout>
  );
}
