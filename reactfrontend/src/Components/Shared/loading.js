import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  min-height: 100vh;
`;

const StyledHeader = styled(Typography)`
  display: flex;
  text-align: center;
`;

function Loading() {

  return (
    <Container>
      <StyledMain>
        <StyledHeader variant='h2' gutterBottom>Loading...</StyledHeader>
      </StyledMain>
    </Container>
  );
}

export default Loading;
