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

function Faq() {

  return (
    <Container>
      <StyledMain>
      <StyledHeader variant='h2' gutterBottom>Faq</StyledHeader>
      <StyledBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed fermentum lorem. Cras lobortis nisi in rhoncus semper. 
        Aenean vehicula at quam quis malesuada. Praesent malesuada leo eget blandit molestie. Curabitur vestibulum imperdiet mi vel condimentum. 
        Pellentesque quis mi eu urna tincidunt hendrerit. Morbi rhoncus vehicula neque, vel molestie nibh mattis a. Donec et erat posuere sem faucibus imperdiet. 
        Ut tristique erat sed augue vestibulum, non gravida tortor rutrum. Maecenas suscipit felis id orci aliquet faucibus.</StyledBody>
      </StyledMain>
    </Container>
  );
}

export default Faq;
