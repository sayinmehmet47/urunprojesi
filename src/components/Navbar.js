import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GrFavorite } from 'react-icons/gr';

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Katalog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="" href="/favorites">
              Favorites
              <GrFavorite className="mx-2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
