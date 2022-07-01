import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import User from '../utilities/types/user.type';
import userService from '../utilities/services/users';
import { useAppSelector } from '../context/store';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReviewsList from '../components/ReviewsList';
import ReservationsList from '../components/ReservationsList';

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
        <Container>
          <Row style={{ padding: '3rem 0s' }}>
            <Col xs={4}>
              <p>
                <strong>Name:</strong>
                {` ${user.firstName} ${user.lastName}`}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Member since:</strong>{' '}
                {new Date(Date.parse(user.createdAt)).toLocaleDateString(
                  'en-GB'
                )}
              </p>
            </Col>
            <Col>
              {user.reviews.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'left' }}>My reviews:</h3>
                  <ReviewsList reviews={user.reviews} />
                </>
              ) : (
                <h3 style={{ textAlign: 'left' }}>No reviews</h3>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {user.reservations.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'left' }}>Reservations:</h3>
                  <ReservationsList reservations={user.reservations} />
                </>
              ) : (
                <h3 style={{ textAlign: 'left' }}>No reservations</h3>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Profile;
