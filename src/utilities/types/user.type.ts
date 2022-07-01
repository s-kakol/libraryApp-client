import Review from './review.type';
import Reservation from './reservation.type';

type User = {
  username: string;
  password: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  reviews: Review[];
  reservations: Reservation[];
  createdAt: string;
  id: string;
};

export default User;
