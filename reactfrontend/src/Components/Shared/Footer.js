import { Box, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from "styled-components";

const Socials = styled(List)`
flex-grow: 1;
padding-left: 10%;
`;

const About = styled(List)`
padding-right: 10%;
`;

const ListItemTitle = styled(ListItem)`
  font-weight: bold;
`;


function Footer() {

  return (
    <Box display="flex" flexWrap="wrap">
      <Socials>
        <ListItemTitle>
          Socials
        </ListItemTitle>
        <ListItem>
          <Link href='/'>Discord</Link>
        </ListItem>
        <ListItem>
          <Link href='/'>Twitter</Link>
        </ListItem>
        <ListItem>
          <Link href='/'>Release Notes</Link>
        </ListItem>
      </Socials>
      <About>
        <ListItemTitle>
          About
        </ListItemTitle>
        <ListItem>
          <Link href='/'>FAQ</Link>
        </ListItem>
        <ListItem>
          <Link href='/'>Terms</Link>
        </ListItem>
        <ListItem>
          <Link href='/'>Support</Link>
        </ListItem>
        <ListItem>
          <Link href='/'>Not Financial Advice</Link>
        </ListItem>
        <ListItem>
          <Link href='https://iexcloud.io'>Data provided by IEX Cloud</Link>
        </ListItem>
      </About>
    </Box>
  );
}

export default Footer;