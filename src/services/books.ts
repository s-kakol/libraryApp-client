import axios from 'axios';
const baseUrl = 'http://localhost:3001';

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}/books`);
  console.log(response.data);
};

export const getMostPopular = async (length?: number) => {
  if (!length) {
    length = 10;
  }
  const response = await axios.get(`${baseUrl}/books`);
  const result = response.data
    .sort((previous, next) => {
      return next.rating - previous.rating;
    })
    .slice(0, length);
  return await result;
};

export default { getAll, getMostPopular };
