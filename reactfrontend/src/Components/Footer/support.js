import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  min-height: 70vh;
`;

const StyledHeader = styled(Typography)`
  display: flex;
  text-align: center;
`;

const StyledBody = styled(Typography)`
  display: flex;
  text-align: center;
`;

function Support() {

  return (
    <Container>
      <StyledMain>
        <StyledHeader variant='h2' gutterBottom>Support</StyledHeader>
        <StyledBody>Support me, pay me on my cashapp(pay kenzie)</StyledBody>
      </StyledMain>
    </Container>
  );
}

export default Support;
