import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import {
  clearReservation,
  resetReservation,
  toggleReservation,
} from '../context/reducers/reservationReducer';
import { useAppDispatch, useAppSelector } from '../context/store';
import reservationService from '../utilities/services/reservation';

const Reservation = (): JSX.Element => {
  const appDispatch = useAppDispatch();
  const reservation = useAppSelector(state => state.reservation);
  const userId = useAppSelector(state => state.user.userId);

  const handleConfirm = async () => {
    const newReview = {
      borrower: userId,
      books: reservation.books.map(book => book.id),
      status: 'CONFIRMED',
      deadline: new Date(
        new Date().setDate(new Date().getDate() + 14)
      ).toISOString(),
    };
    try {
      await reservationService.addReview(newReview);
      appDispatch(resetReservation());
    } catch (err: any) {
      throw new Error(err);
    }
  };

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
          onClick={handleConfirm}
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
