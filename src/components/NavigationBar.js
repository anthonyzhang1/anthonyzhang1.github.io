/* This file handles the display of the navigation bar, which contains links to other pages on the website.
 * The navigation bar is displayed on all pages. */

import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar className='navigation-bar-c' expand='sm'>
      <Container>
        <Navbar.Brand href='/'>Anthony Zhang</Navbar.Brand>
        <Navbar.Toggle aria-controls='navigation-bar' />
        <Navbar.Collapse id='navigation-bar'>
          <Nav className='me-auto'>
            <Nav.Link href='/aboot'>About</Nav.Link>
            <Nav.Link href='/works'>Works</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}