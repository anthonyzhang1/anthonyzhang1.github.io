import { Container } from 'react-bootstrap';

/** The footer only contains the copyright, and is displayed on all pages. */
export default function Footer() {
  return (
    <Container className='footer-c' fluid>
      <p>© 2023 Anthony Zhang</p>
    </Container>
  );
}