import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Book from '../../utilities/types/book.type';
import { useAppDispatch, useAppSelector } from '../../context/store';
import {
  clearReservation,
  setReservation,
} from '../../context/reducers/reservationReducer';

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps): JSX.Element => {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const reservation = useAppSelector(state => state.reservation);
  const appDispatch = useAppDispatch();
  console.log(reservation);

  const renderReservationBtns = (): JSX.Element => {
    return !reservation.books.includes(book.id) ? (
      <Button
        variant="secondary"
        onClick={() => appDispatch(setReservation(book.id))}
      >
        Add
      </Button>
    ) : (
      <Button
        variant="danger"
        onClick={() => appDispatch(clearReservation(book.id))}
      >
        Remove
      </Button>
    );
  };

  return (
    <Card
      bg="light"
      style={{ width: '18rem', margin: '0.3rem', height: 'auto' }}
      className="d-block w-100 shadow-sm"
    >
      <Card.Link
        as={Link}
        to={`/book/${book.id}`}
        style={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <Card.Img
          variant="top"
          src={book.coverImgUrl}
          alt={`${book.title} cover image`}
        />
      </Card.Link>
      <Card.Body>
        <Card.Title className="text-center">
          <Row style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            {book.title}
            <div>
              <em style={{ fontWeight: 400 }}> by {book.author}</em>
              <div style={{ float: 'right' }}>
                {isLoggedIn && renderReservationBtns()}
              </div>
            </div>
          </Row>
        </Card.Title>
        <Card.Text>{book.description.substring(0, 90)}...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
