import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../utilities/types/book.type';
import bookService from '../utilities/services/books';
import NotFound from './NotFound';

const BookDetails = (): JSX.Element => {
  const id = useParams().id || '';
  const [book, setBook] = useState<Book>();

  const initBookDetails = async (id: string) => {
    const result = await bookService.getOneById(id);
    setBook(result);
  };

  useEffect(() => {
    initBookDetails(id);
  }, []);

  return <h1>{book?.title}</h1>;
};

export default BookDetails;
