import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import './Login.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userService from '../utilities/services/users';
import { useState } from 'react';

const Register = (): JSX.Element => {
  const defaultError = 'Something went wrong.';
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>(defaultError);
  const errorStyle = {
    color: '#ce2649',
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: async values => {
      try {
        await userService.register(values);
      } catch (exception: any) {
        if (exception.response.data.message != undefined) {
          setErrorMsg(exception.response.data.message);
        }
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
          setErrorMsg(defaultError);
        }, 5000);
      }
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(64, 'Username too long')
        .required('Please enter username'),
      email: Yup.string()
        .email('Invalid email address')
        .max(320, 'Email is too long')
        .required('Please enter email'),
      password: Yup.string()
        .min(6, 'Password must be min 6 characters')
        .max(128, 'Password is too long')
        .matches(
          /^(?=.*?[A-Z])/,
          'Password must contain at least one uppercase letter'
        )
        .matches(
          /^(?=.*?[a-z])/,
          'Password must contain at least one lowercase letter'
        )
        .matches(/^(?=.*?[0-9])/, 'Password must contain at least one number')
        .required('Please enter password'),
      firstName: Yup.string()
        .max(64, 'Name too long')
        .required('Please enter first name'),
      lastName: Yup.string()
        .max(64, 'Surname too long')
        .required('Please enter last name'),
    }),
  });

  return (
    <Container style={{ maxWidth: '50vh', padding: '3rem' }}>
      <Row>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>
              <strong>Username</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p style={errorStyle}>{formik.errors.username}</p>
            ) : null}
          </Form.Group>

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
          </Form.Group>

          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>
              <strong>First Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p style={errorStyle}>{formik.errors.firstName}</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>
              <strong>Last Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p style={errorStyle}>{formik.errors.lastName}</p>
            ) : null}
            {isError ? <p style={errorStyle}>{errorMsg}</p> : null}
          </Form.Group>

          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Register;
