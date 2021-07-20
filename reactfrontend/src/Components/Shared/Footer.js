import { Box, Typography, Container } from '@material-ui/core';
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

const FooterBox = styled(Box)`
  border-top: 1px solid black;
`;


function Footer() {

  return (
    <Container>
      <FooterBox display="flex" flexWrap="wrap">
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
            <Link href='/release'>Release Notes</Link>
          </ListItem>
        </Socials>
        <About>
          <ListItemTitle>
            About
          </ListItemTitle>
          <ListItem>
            <Link href='/faq'>FAQ</Link>
          </ListItem>
          <ListItem>
            <Link href='/terms'>Terms</Link>
          </ListItem>
          <ListItem>
            <Link href='/support'>Support</Link>
          </ListItem>
          <ListItem>
            <Link href='/terms'>Not Financial Advice</Link>
          </ListItem>
          <ListItem>
            <Link href='https://iexcloud.io'>Data provided by IEX Cloud</Link>
          </ListItem>
        </About>
      </FooterBox>
    </Container>
  );
}

export default Footer;