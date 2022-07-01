import axios from 'axios';
import Review from '../types/review.type';
const baseUrl = 'http://localhost:3001';

export const getAll = async (): Promise<Review[]> => {
  const response = await axios.get(`${baseUrl}/reviews`);
  return response.data;
};

export default { getAll };
