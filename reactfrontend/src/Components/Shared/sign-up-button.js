import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 2%;
`;

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledButton
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </StyledButton>
  );
};

export default SignupButton;