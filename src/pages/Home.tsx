import { useEffect, useState } from 'react';
import BookCarousel from '../components/book/BookCarousel';
import NewsList from '../components/NewsList';
import bookService from '../utilities/services/books';
import newsService from '../utilities/services/news';
import Book from '../utilities/types/book.type';
import NewsItem from '../utilities/types/news.type';

const Home = (): JSX.Element => {
  const [popularBooks, setPopularBooks] = useState<Book[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  const initPopularBooks = async () => {
    const howMany = 9;
    const result = await bookService.getMostPopular(howMany);
    setPopularBooks(result);
  };

  const initNews = async () => {
    const result = await newsService.getAll();
    setNewsList(result);
  };

  useEffect(() => {
    initPopularBooks();
    initNews();
  }, []);

  return (
    <>
      <div style={{ margin: '2rem' }}>
        <h3 className="text-center">Recommended by our readers</h3>
        <BookCarousel books={popularBooks} />
      </div>
      <NewsList news={newsList} />
    </>
  );
};

export default Home;
