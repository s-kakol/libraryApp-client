import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../utilities/types/book.type';
import bookService from '../utilities/services/books';
import NotFound from './NotFound';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const BookDetails = (): JSX.Element => {
  const id = useParams().id || '';
  const [book, setBook] = useState<Book>();
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

  const renderDetails = (): JSX.Element => {
    const imgStyle = {
      borderRadius: 12,
      maxWidth: '25rem',
      height: 'auto',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignSelf: 'center',
    };

    return (
      <Container>
        <Row style={{ margin: '3rem auto' }}>
          <Col>
            <Image fluid={true} src={book?.coverImgUrl} style={imgStyle} />
          </Col>
          <Col>
            <Col>
              <h1 style={{ fontStyle: 'italic' }}>{book?.title}</h1>
              <p>
                by{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 600 }}>
                  {book?.author}
                </span>
              </p>
              <p>{book?.rating}</p>
            </Col>
            <Col>
              Copies available {book?.copiesAvailable} out of{' '}
              {book?.copiesTotal}
            </Col>
          </Col>
        </Row>
        <Row>OVERVIEW DESCRIPTION</Row>
        <Row>
          DETAILS
          <Row>
            <Col>DETAILS_A1</Col>
            <Col>DETAILS_B1</Col>
          </Row>
          <Row>
            <Col>DETAILS_A2</Col>
            <Col>DETAILS_B2</Col>
          </Row>
        </Row>
      </Container>
    );
  };

  return !error ? renderDetails() : <NotFound />;
};

export default BookDetails;
