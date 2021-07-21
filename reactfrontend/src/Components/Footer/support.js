import { Button, Container, Typography } from "@material-ui/core";
import styled from "styled-components";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  min-height: 70vh;
`;

const StyledButton = styled(Button)`
  display: flex;
  text-align: center;
  margin-bottom: 2%;
`;

const StyledIcon = styled(MonetizationOnIcon)`
  display: flex;
  text-align: center;
  margin-right: 10%;
`;

const StyledBody = styled(Typography)`
  display: flex;
  text-align: center;
`;

function Support() {

  return (
    <Container>
      <StyledMain>
        <StyledButton size='large' variant="outlined" href='https://paypal.me/JohnMillane?locale.x=en_US'>
          <StyledIcon />
          <StyledBody variant='h5'>Donate</StyledBody>
        </StyledButton>
        <StyledBody variant='body1'>Help support this project for more features and future updates.</StyledBody>
      </StyledMain>
    </Container>
  );
}

export default Support;
