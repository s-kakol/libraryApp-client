import axios from 'axios';
const baseUrl = 'http://localhost:3001/auth/login';

type Credentials = {
  email: string;
  password: string;
};

const login = async (credentials: Credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
