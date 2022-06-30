import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Book from '../../utilities/types/book.type';

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps): JSX.Element => {
  return (
    <Card
      style={{ width: '18rem', margin: '0.3rem', height: 'auto' }}
      className="d-block w-100 shadow-sm"
    >
      <Card.Link
        as={Link}
        to={`/books/${book.id}`}
        style={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <Card.Img
          variant="top"
          src={book.coverImgUrl}
          alt={`${book.title} cover image`}
        />
        <Card.Body>
          <Card.Title className="text-center">
            {book.title}
            <span className="font-weight-normal"> by </span>
            <span className="font-italic">{book.author}</span>
          </Card.Title>
          <Card.Text>{book.description.substring(0, 90)}...</Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};

export default BookCard;
