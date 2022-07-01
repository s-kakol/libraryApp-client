import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { toggleReservation } from '../context/reducers/reservationReducer';
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
        <Stack gap={2}>
          {reservation.books.map(book => (
            <p key={book.id}>{book.title}</p>
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Reservation;
