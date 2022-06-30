import axios from 'axios';
import NewsItem from '../types/news.type';
const baseUrl = 'http://localhost:3001';

export const getAll = async (): Promise<NewsItem[]> => {
  const response = await axios.get(`${baseUrl}/news`);
  return response.data;
};

export default { getAll };
