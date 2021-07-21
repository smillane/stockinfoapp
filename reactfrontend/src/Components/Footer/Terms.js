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

const StyledMainHeader = styled(Typography)`
display: flex;
text-align: center;
margin-bottom: 2%;
margin-top: 2%;
`;

const StyledSubHeader = styled(Typography)`
display: flex;
text-align: center;
margin-bottom: 2%;
`;

const StyledBody = styled(Typography)`
  display: flex;
  text-align: center;
`;

function Terms() {

  return (
    <Container>
      <StyledMain>
          <StyledMainHeader variant='h4'>Terms</StyledMainHeader>
          <StyledSubHeader variant='h4'>Limitations on investment guidance and professional advice</StyledSubHeader>
          <StyledBody variant='body1'>Any content on this site or related pages are not intended to provide legal, tax, investment or insurance advice. 
            NAME TBD
            is not registered as a securities broker-dealer or an investment adviser with the U.S. Securities and Exchange Commission, 
            the Financial Industry Regulatory Authority (“FINRA”) or any state securities regulatory authority. Nothing on 
            NAME TBD
            should be construed as an offer to sell, a solicitation of an offer to buy, or a recommendation for any security by 
            NAME TBD 
            or any third party. Certain investment planning tools available on 
            NAME TBD
            may provide general investment education based on your input. You are solely responsible for determining whether any investment, 
            investment strategy, security or related transaction is appropriate for you based on your personal investment objectives, 
            financial circumstances and risk tolerance. You should consult your legal or tax professional regarding your specific situation.</StyledBody>

          <StyledMainHeader variant='h4'>Terms and Conditions ("Terms")</StyledMainHeader>
          <StyledBody variant='body1'>lorem ipsum</StyledBody>


        </StyledMain>
    </Container>
  );
}

export default Terms;
