import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../utilities/types/book.type';
import bookService from '../utilities/services/books';
import NotFound from './NotFound';

const BookDetails = (): JSX.Element => {
  const id = useParams().id || '';
  const [book, setBook] = useState<Book>();
  const [error, setError] = useState<string>();

  const initBookDetails = async (id: string) => {
    const result = await bookService.getOneById(id);
    if (result instanceof Error) {
      setError(result.message);
    } else {
      setBook(result);
    }
  };

  useEffect(() => {
    initBookDetails(id);
  }, []);

  const renderDetails = (): JSX.Element => {
    return <h1>{book?.title}</h1>;
  };

  return !error ? renderDetails() : <NotFound />;
};

export default BookDetails;
