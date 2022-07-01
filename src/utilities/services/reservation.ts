import axios from 'axios';
const baseUrl = 'http://localhost:3001/reservations';

type CreateReview = {
  borrower: string;
  books: string[];
  status: string;
  deadline: string;
};

const addReview = async (data: CreateReview) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

export default { addReview };
