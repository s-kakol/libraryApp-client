import Review from './review.type';

type Book = {
  author: string;
  copiesAvailable: number;
  copiesTotal: number;
  coverImgUrl: string;
  createdAt: Date;
  description: string;
  genre: Genre[];
  id: string;
  isbn: number;
  pages: number;
  price: number;
  publicationYear: number;
  publisher: string;
  rating: number;
  reviews: Review[];
  title: string;
};

export enum Genre {
  ADVENTURE = 'Adventure',
  BIOGRAPHY = 'Biography',
  BUSINESS = 'Business',
  CHILDRENS_BOOK = `Children's Book`,
  COMEDY = 'Comedy',
  COOKBOOK = 'Cookbook',
  DRAMA = 'Drama',
  FANTASY = 'Fantasy',
  GAME = 'Game',
  FICTION = 'Fiction',
  HISTORY = 'History',
  HORROR = 'Horror',
  MYSTERY = 'Mystery',
  NONFICTION = 'Nonfiction',
  PHILOSOPHY = 'Philosophy',
  POETRY = 'Poetry',
  PSYCHOLOGY = 'Psychology',
  RELIGION = 'Religion',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  SCIENCE = 'Science',
  THRILLER = 'Thriller',
}

export default Book;
