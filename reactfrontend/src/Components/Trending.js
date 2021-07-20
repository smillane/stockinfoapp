import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  min-height: 70vh;
`;

const StyledHeader = styled(Typography)`
  display: flex;
  text-align: center;
  padding-top: 5%;
`;

const StyledBody = styled(Typography)`
  display: flex;
  text-align: center;
`;

function Trending() {

  return (
    <Container>
      <StyledMain>
        <StyledHeader variant='h1' gutterBottom>Trending Stocks</StyledHeader>
        
        <StyledHeader variant='h3' gutterBottom>Top Movers</StyledHeader>
        <StyledBody>list of stocks here</StyledBody>
        
        <StyledHeader variant='h3' gutterBottom>Reddit Sentiment</StyledHeader>
        <StyledBody>list of stock sentiment here</StyledBody>
        
        <StyledHeader variant='h3' gutterBottom>Twitter Sentiment</StyledHeader>
        <StyledBody>list of stock sentiment here</StyledBody>
      </StyledMain>
    </Container>
  );
}

export default Trending;
