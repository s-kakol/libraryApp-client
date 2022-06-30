import Card from 'react-bootstrap/Card';
import Book from '../utilities/types/book.type';

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps): JSX.Element => {
  return (
    <Card
      border="secondary"
      style={{ width: '18rem' }}
      className="d-block w-100"
    >
      <Card.Img variant="top" src={book.coverImgUrl} />
      <Card.Body>
        <Card.Title className="text-center">
          {book.title}
          <span className="font-weight-normal"> by </span>
          <span className="font-italic">{book.author}</span>
        </Card.Title>
        <Card.Text>{book.description.substring(0, 90)}...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
