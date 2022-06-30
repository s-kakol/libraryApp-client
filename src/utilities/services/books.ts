import axios from 'axios';
import Book from '../types/book.type';
const baseUrl = 'http://localhost:3001/books';

const getAll = async (): Promise<Book[]> => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

const getMostPopular = async (length?: number): Promise<Book[]> => {
  if (!length) {
    length = 10;
  }
  const response = await axios.get(`${baseUrl}`);
  const result = response.data
    .sort((previous: Book, next: Book) => {
      return next.rating - previous.rating;
    })
    .slice(0, length);
  return await result;
};

export default { getAll, getMostPopular };
