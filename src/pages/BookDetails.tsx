import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../utilities/types/book.type';
import bookService from '../utilities/services/books';
import NotFound from './NotFound';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BookDetailsTable from '../components/book/BookDetailsTable';
// import ReviewsList from '../components/ReviewsList';
import DisplayRating from '../components/DisplayRating';

const emptyBook = {
  author: '',
  copiesAvailable: 0,
  copiesTotal: 0,
  coverImgUrl: '',
  createdAt: new Date(),
  description: '',
  genre: [],
  id: '',
  isbn: 0,
  pages: 0,
  price: 0,
  publicationYear: 0,
  publisher: '',
  rating: 0,
  reviews: [],
  title: '',
};

const BookDetails = (): JSX.Element => {
  const id = useParams().id || '';
  const [book, setBook] = useState<Book>(emptyBook);
  const [error, setError] = useState<boolean>(false);

  const initBookDetails = async (id: string) => {
    try {
      const result = await bookService.getOneById(id);
      setBook(result);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    initBookDetails(id);
  }, []);

  const imgStyle = {
    borderRadius: 12,
    maxWidth: '25rem',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
  };

  const descStyle = {
    background: '#EBECED',
    borderStyle: 'double',
    borderRadius: '5%',
    borderColor: '#D4D5D6',
    padding: '1rem 2rem',
    margin: '1rem',
    textAlign: 'justify' as const,
  };

  const renderReviews = (): JSX.Element => {
    return (
      <h1>Reviews</h1>
      // <Row>
      //   <h3 style={{ textAlign: 'left' }}>Reviews:</h3>
      //   <ReviewsList reviews={book.reviews} />
      // </Row>
    );
  };

  const renderDetails = (): JSX.Element => {
    return (
      <Container>
        <Row style={{ margin: '3rem auto' }}>
          <Col>
            <Image fluid={true} src={book.coverImgUrl} style={imgStyle} />
          </Col>
          <Col>
            <Row>
              <h1 style={{ fontStyle: 'italic' }}>{book.title}</h1>
              <Col>
                <p>
                  by{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                    {book.author}
                  </span>
                </p>
                <p>Available copies: {book.copiesAvailable}</p>
              </Col>
              <Col>
                <div style={{ textAlign: 'right' }}>
                  <DisplayRating rating={book.rating} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >{` - (${book.reviews.length})`}</span>
                </div>
              </Col>
            </Row>
            <Col style={descStyle}>{book.description}</Col>
          </Col>
        </Row>
        <Row>
          <BookDetailsTable
            isbn={book.isbn}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            publicationYear={book.publicationYear}
            genre={book.genre}
            pages={book.pages}
          />
        </Row>
        {book.reviews.length > 0 ? renderReviews() : null}
      </Container>
    );
  };

  return !error ? renderDetails() : <NotFound />;
};

export default BookDetails;
