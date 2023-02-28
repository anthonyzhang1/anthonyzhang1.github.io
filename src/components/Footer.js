/* This file handles the display of the footer, which contains the copyright and contact information.
 * The footer is displayed on all pages. */

import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container className='footer-c' fluid>
      <p>© 2023 Anthony Zhang</p>
    </Container>
  );
}