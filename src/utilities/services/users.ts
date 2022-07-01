import axios from 'axios';
import User from '../types/user.type';
const baseUrl = 'http://localhost:3001';

type NewUser = {
  username: string;
  password: string;
  role?: string;
  email: string;
  firstName: string;
  lastName: string;
  reviews?: [];
  reservations?: [];
};

const getAll = async (): Promise<User[]> => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
};

const register = async (data: NewUser): Promise<void> => {
  const newUser = { ...data, role: 'user', reviews: [], reservations: [] };
  const response = await axios.post(`${baseUrl}/auth/register`, newUser);
  return response.data;
};

const getById = async (id: string): Promise<User> => {
  const response = await axios.get(`${baseUrl}/users/${id}`);
  return response.data;
};

const getByEmail = async (email: string): Promise<User> => {
  const response = await axios.get(`${baseUrl}/users/em/${email}`);
  return response.data;
};

export default { getAll, register, getById, getByEmail };
