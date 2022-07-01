import NavbarBs from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Genre } from '../utilities/types/book.type';
import { useAppDispatch, useAppSelector } from '../context/store';
import { signOut } from '../context/reducers/userReducer';

const genres = Object.values(Genre) as unknown as Array<keyof typeof Genre>;

const Navbar = (): JSX.Element => {
  const navigateButton = useNavigate();
  const appDispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const booksInReservation = useAppSelector(
    state => state.reservation.quantity
  );

  const signedInNavbar = (): JSX.Element => {
    return (
      <>
        <Button
          onClick={() => console.log('open')}
          variant="outline-dark"
          style={{ marginLeft: '0.5rem' }}
          className="rounded"
        >
          Reservation {booksInReservation > 0 && <>({booksInReservation})</>}
        </Button>
        <NavDropdown
          align="end"
          title={user.userName}
          style={{ color: 'black' }}
        >
          <NavDropdown.Item as={NavLink} to={`/profile/${user.userId}`}>
            Show profile
          </NavDropdown.Item>
          <NavDropdown.Item>Edit profile</NavDropdown.Item>
          <NavDropdown.Item
            as={NavLink}
            to={'/'}
            onClick={() => appDispatch(signOut())}
          >
            Sign out
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
  };

  const defaultNavbar = (): JSX.Element => {
    return (
      <>
        <Button
          onClick={() => navigateButton('/login')}
          variant="outline-dark"
          style={{ marginLeft: '0.5rem' }}
          className="rounded"
        >
          Sign in
        </Button>
        <Button
          onClick={() => navigateButton('/join')}
          variant="outline-dark"
          style={{ marginLeft: '0.5rem' }}
          className="rounded"
        >
          Register
        </Button>
      </>
    );
  };

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3" expand="lg">
      <Container>
        <NavbarBs.Toggle aria-controls="navbar-nav" />
        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/'}>
              Home
            </Nav.Link>
            <NavDropdown title="Books">
              <NavDropdown.Item as={NavLink} to={'/books'}>
                All
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {genres.map(genre => {
                return (
                  <NavDropdown.Item
                    key={genre}
                    as={NavLink}
                    to={`/books/${genre}`}
                  >
                    {String(genre)}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
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
          {user.isLoggedIn ? signedInNavbar() : defaultNavbar()}
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
