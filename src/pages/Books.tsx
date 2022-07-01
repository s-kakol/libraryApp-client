import { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BookCard from '../components/book/BookCard';
import Pagination from '../components/Pagination';
import SortingDropdown from '../components/SortingDropdown';
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
    initBooksList();
    setItemOffset(0);
  }, [genre]);

  useEffect(() => {
    const endOffset = itemOffset + limit;
    setCurrentBooks(books.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(books.length / limit));
  }, [itemOffset, books, genre]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event.selected);
    console.log(itemOffset);
    const newOffset = (event.selected * limit) % books.length;
    console.log(newOffset);
    setItemOffset(newOffset);
  };

  const renderHeader = (): JSX.Element => {
    return (
      <Col>
        <h1>
          {genre ? genre : 'Total'} {` - ${books.length} results`}
        </h1>
      </Col>
    );
  };

  return (
    <Container>
      <Row>
        {renderHeader()}
        <SortingDropdown />
      </Row>
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
      {pageCount > 1 ? (
        <Pagination handler={handlePageClick} pageCount={pageCount} />
      ) : null}
    </Container>
  );
};

export default Books;
