import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import bookService from '../utilities/services/books';
import userService from '../utilities/services/users';
import reservationService from '../utilities/services/reservation';
import reviewsService from '../utilities/services/reviews';
import Book from '../utilities/types/book.type';
import Review from '../utilities/types/review.type';
import User from '../utilities/types/user.type';
import Reservation from '../utilities/types/reservation.type';

const Stats = (): JSX.Element => {
  const [mostPopularBook, setMostPopularBook] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initData = async () => {
    const result = await bookService.getMostPopular(1);
    setMostPopularBook(result[0].title);
    setBooks(await bookService.getAll());
    setReviews(await reviewsService.getAll());
    setUsers(await userService.getAll());
    setReservations(await reservationService.getAll());
    setIsLoading(false);
  };

  useEffect(() => {
    initData();
  }, []);

  const mostPopularGenre = () => {
    const genres = books.map(book => book.genre).flat();
    const counts: any = {};

    for (const genre of genres) {
      counts[genre] = counts[genre] ? counts[genre] + 1 : 1;
    }

    const sortedGenres = Object.values(counts).sort((prev: any, next: any) => {
      if (prev > next) return -1;
      if (prev < next) return 1;
      return 0;
    });

    return Object.keys(counts).find(key => counts[key] === sortedGenres[0]);
  };

  return (
    <>
      <h1>Statistics</h1>
      {isLoading ? (
        <h2>Please wait. Loading data...</h2>
      ) : (
        <Row>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>Most popular book</td>
                  <td>{mostPopularBook}</td>
                </tr>
                <tr>
                  <td>Amount of books</td>
                  <td>{books.length}</td>
                </tr>
                <tr>
                  <td>Amount of reviews</td>
                  <td>{reviews.length}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>Most popular book genre</td>
                  <td>{mostPopularGenre()}</td>
                </tr>
                <tr>
                  <td>Amount of users</td>
                  <td>{users.length}</td>
                </tr>
                <tr>
                  <td>Amount of reservations</td>
                  <td>{reservations.length}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Stats;
