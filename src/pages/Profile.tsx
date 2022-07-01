import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import User from '../utilities/types/user.type';
import userService from '../utilities/services/users';
import { useAppSelector } from '../context/store';

const emptyUser = {
  username: '',
  password: '',
  role: '',
  email: '',
  firstName: '',
  lastName: '',
  reviews: [],
  reservations: [],
  createdAt: '',
  id: '',
};

const Profile = (): JSX.Element => {
  const id = useParams().id || '';
  const [user, setUser] = useState<User>(emptyUser);
  const navigate = useNavigate();
  const loggedUser = useAppSelector(state => state.user);

  const initUser = async (id: string) => {
    try {
      const result = await userService.getById(id);
      setUser(result);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    initUser(id);
    if (!loggedUser.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      {loggedUser.userId !== user.id ? (
        <h1>401 - You are not authorized to view this page</h1>
      ) : (
        <>
          <h2>{user.username}</h2>
          <p>{user.id}</p>
        </>
      )}
    </>
  );
};

export default Profile;
