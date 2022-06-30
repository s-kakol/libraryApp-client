import NavbarBs from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navbar = (): JSX.Element => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={'/'}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/books'}>
            Books
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/contact'}>
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to={'/about'}>
            About
          </Nav.Link>
        </Nav>
        <Button variant="outline-dark" className="rounded">
          Search
        </Button>
        <Button
          variant="outline-dark"
          style={{ marginLeft: '0.5rem' }}
          className="rounded"
        >
          Login
        </Button>
        <Button
          variant="outline-dark"
          style={{ marginLeft: '0.5rem' }}
          className="rounded"
        >
          Register
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
