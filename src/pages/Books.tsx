import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../components/book/BookCard';
import bookService from '../utilities/services/books';
import Book from '../utilities/types/book.type';

const Books = (): JSX.Element => {
  const genre = useParams().genre || null;
  const [books, setBooks] = useState<Book[]>([]);

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

  return (
    <>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};

export default Books;
