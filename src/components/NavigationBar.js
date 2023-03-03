import { Container, Nav, Navbar } from 'react-bootstrap';

/** The navigation bar contains links to other pages on the website, and is displayed on all pages. */
export default function NavigationBar() {
  return (
    // `expand` turns the navbar into a hamburger dropdown if the display is not wide enough.
    <Navbar className='navigation-bar-c' expand='sm'>
      <Container>
        <Navbar.Brand href='/' className='me-5'>Anthony Zhang</Navbar.Brand>
        <Navbar.Toggle aria-controls='navigation-bar' />
        <Navbar.Collapse id='navigation-bar'>
          <Nav className='gap-4'>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/works'>Works</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}