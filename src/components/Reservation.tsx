import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import {
  clearReservation,
  toggleReservation,
} from '../context/reducers/reservationReducer';
import { useAppDispatch, useAppSelector } from '../context/store';

const Reservation = (): JSX.Element => {
  const appDispatch = useAppDispatch();
  const reservation = useAppSelector(state => state.reservation);

  return (
    <Offcanvas
      show={reservation.isOpen}
      placement="end"
      onHide={() => appDispatch(toggleReservation())}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Reservation</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Button
          variant="outline-dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => console.log('confirm')}
        >
          Confirm
        </Button>
        <Stack className="d-flex" direction="vertical" gap={2}>
          {reservation.books.map(book => (
            <div
              key={book.id}
              style={{
                paddingBottom: 10,
                borderBottom: '1px solid grey',
              }}
            >
              <Col>
                <div style={{ fontWeight: 600 }}>{book.title}</div>
                <span style={{ fontStyle: 'italic' }}>by {book.author}</span>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'right' }}>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => appDispatch(clearReservation(book.id))}
                >
                  X
                </Button>
              </Col>
            </div>
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Reservation;
