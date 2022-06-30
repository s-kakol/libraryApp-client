import Book from './types/book.type';

const subArray = (arr: Book[], size: number): Book[][] =>
  [...Array(Math.ceil(arr.length / size))].map((_, i) =>
    arr.slice(size * i, size + size * i)
  );

export const createSubArray = (
  books: Book[],
  subArraySize: number
): Book[][] => {
  return subArray(books, subArraySize);
};
