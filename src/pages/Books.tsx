import { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookCard from '../components/book/BookCard';
import Pagination from '../components/Pagination';
import { createSubArray } from '../utilities/bookSubArray';
import bookService from '../utilities/services/books';
import Book from '../utilities/types/book.type';

const Books = (): JSX.Element => {
  const genre = useParams().genre || null;
  const [books, setBooks] = useState<Book[]>([]);
  const [currentBooks, setCurrentBooks] = useState<Book[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const bookGroups = createSubArray(currentBooks, 5);
  const limit = 10;

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
    setItemOffset(0);
  }, [genre]);

  useEffect(() => {
    initBooksList();
    const endOffset = itemOffset + limit;
    setCurrentBooks(books.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(books.length / limit));
  }, [genre, itemOffset, books]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * limit) % books.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
      <Pagination handler={handlePageClick} pageCount={pageCount} />
    </Container>
  );
};

export default Books;
