import styled from 'styled-components';

const StyledPageLayout = styled.div``;

export default function PageLayout(props) {
  return (
    <StyledPageLayout className='layout-page'>
      {props.children}
    </StyledPageLayout>
  );
}
