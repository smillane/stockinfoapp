import { useAuth0 } from "@auth0/auth0-react";
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

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container>
        <StyledMain>
          <div>
            <img src={user.picture} alt={user.name} />
            <StyledHeader>{user.name}</StyledHeader>
            <StyledBody>{user.email}</StyledBody>
          </div>
        </StyledMain>
      </Container>
    )
  );
};

export default Profile;