import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 2%;
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledButton onClick={() => loginWithRedirect()}>Log In</StyledButton>;
};

export default LoginButton;