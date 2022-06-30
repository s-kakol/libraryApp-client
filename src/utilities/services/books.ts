import axios from 'axios';
import getErrorMessage from '../errorHandler';
import Book from '../types/book.type';
const baseUrl = 'http://localhost:3001/books';

const getAll = async (): Promise<Book[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getAllByGenre = async (genre: string): Promise<Book[]> => {
  const response = await axios.get(`${baseUrl}/genre/${genre}`);
  return response.data;
};

const getMostPopular = async (length?: number): Promise<Book[]> => {
  if (!length) {
    length = 10;
  }
  const response = await axios.get(baseUrl);
  const result = response.data
    .sort((previous: Book, next: Book) => {
      return next.rating - previous.rating;
    })
    .slice(0, length);
  return await result;
};

const getOneById = async (id: string): Promise<Book> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(getErrorMessage(err));
  }
};

export default { getAll, getAllByGenre, getMostPopular, getOneById };
