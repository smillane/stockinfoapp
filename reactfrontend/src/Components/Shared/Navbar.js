import { AppBar, Toolbar, Link } from '@material-ui/core';
import styled from "styled-components";
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from './sign-up-button';

const StyledLink = styled(Link)`
  margin-left: 5%;
`;

const AppName = styled(Link)`
  flex-grow: 1;
`;


function NavBar() {
  const { isAuthenticated } = useAuth0();
  

  return (
    <AppBar style={{ backgroundColor: 'white' }} position='static'>
      <Toolbar>
        <AppName href='/'>StockInfoApp</AppName>
        <StyledLink href='/lists'>My Lists</StyledLink>
        <StyledLink href='/news'>News</StyledLink>
        <StyledLink href='/trending'>Todays Trending</StyledLink>
        <StyledLink href='/congress'>Congress Trades</StyledLink>
        <StyledLink href='/support'>Support Me</StyledLink>
        <StyledLink>
          {isAuthenticated ? <StyledLink href='/profile'>My Profile</StyledLink> : <SignupButton />}
        </StyledLink>
        <StyledLink>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;