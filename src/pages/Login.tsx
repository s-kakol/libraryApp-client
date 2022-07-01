import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import './Login.scss';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import loginService from '../utilities/services/login';
import userService from '../utilities/services/users';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../context/store';
import { signIn } from '../context/reducers/userReducer';

const Login = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const target = useRef(null);

  const errorStyle = {
    color: '#ce2649',
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        const loggedUser = await loginService.login(values);
        const userData = await userService.findByEmail(values.email);
        window.localStorage.setItem(
          'loggedLibraryUser',
          JSON.stringify(loggedUser)
        );
        appDispatch(
          signIn({
            isLoggedIn: true,
            token: loggedUser.token,
            userName: userData.username,
            userId: userData.id,
          })
        );
        navigate('/');
      } catch (exception) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .max(320, 'Email is too long')
        .required('Please enter email'),
      password: Yup.string()
        .max(128, 'Password is too long')
        .required('Please enter password'),
    }),
  });

  return (
    <Container style={{ maxWidth: '50vh', padding: '3rem' }}>
      <Row>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>
              <strong>Email address</strong>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p style={errorStyle}>{formik.errors.email}</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p style={errorStyle}>{formik.errors.password}</p>
            ) : null}
            {isError ? (
              <p style={errorStyle}>Invalid email or password.</p>
            ) : null}
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Form.Text
                ref={target}
                className="text-muted login-help"
                onMouseOver={() => setShow(!show)}
              >
                Can't login?
              </Form.Text>
              <Overlay target={target.current} show={show} placement="bottom">
                {props => (
                  <Tooltip id="login-help" {...props}>
                    Please contact an admin
                  </Tooltip>
                )}
              </Overlay>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
