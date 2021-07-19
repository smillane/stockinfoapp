import { AppBar, Toolbar, Link } from '@material-ui/core';
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-left: 5%;
`;

const AppName = styled(Link)`
flex-grow: 1;
`;


function NavBar() {
  

  return (
    <AppBar style={{ backgroundColor: 'white' }} position='static'>
      <Toolbar>
        <AppName href='/'>StockInfoApp</AppName>
        <StyledLink href='/lists'>My Lists</StyledLink>
        <StyledLink href='/news'>News</StyledLink>
        <StyledLink href='/congress'>Congress Trades</StyledLink>
        <StyledLink href='/trending'>Todays Trending</StyledLink>
        <StyledLink href='/support'>Support Me</StyledLink>
        <StyledLink href='/settings'>Settings</StyledLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;