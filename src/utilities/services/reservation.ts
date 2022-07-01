import axios from 'axios';
import Reservation from '../types/reservation.type';
const baseUrl = 'http://localhost:3001/reservations';

type CreateReview = {
  borrower: string;
  books: string[];
  status: string;
  deadline: string;
};

const getAll = async (): Promise<Reservation[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addReview = async (data: CreateReview) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

export default { getAll, addReview };
