import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 2%;
`;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </StyledButton>
  );
};

export default LogoutButton;