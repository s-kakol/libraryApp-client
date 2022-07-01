import axios from 'axios';
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

const register = async (data: NewUser) => {
  const newUser = { ...data, role: 'user', reviews: [], reservations: [] };
  const response = await axios.post(`${baseUrl}/auth/register`, newUser);
  return response.data;
};

export default { register };
