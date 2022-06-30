import { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookCard from '../components/book/BookCard';
import bookService from '../utilities/services/books';
import Book from '../utilities/types/book.type';

const Books = (): JSX.Element => {
  const genre = useParams().genre || null;
  const [books, setBooks] = useState<Book[]>([]);
  const subArraySize = 5;

  const initBooksList = async () => {
    let booksList;
    if (typeof genre === 'string') {
      booksList = await bookService.getAllByGenre(genre);
    } else {
      booksList = await bookService.getAll();
    }
    setBooks(booksList);
  };

  useEffect(() => {
    initBooksList();
  }, [genre]);

  const subArray = (arr: Book[], size: number): Book[][] =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) =>
      arr.slice(size * i, size + size * i)
    );

  const bookGroups = subArray(books, subArraySize);

  return (
    <Container>
      {bookGroups.map((booksSubGroup, i) => (
        <Row key={i}>
          <Col>
            <CardGroup>
              {booksSubGroup.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </CardGroup>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Books;
