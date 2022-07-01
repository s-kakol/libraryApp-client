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

const Login = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const target = useRef(null);

  const errorStyle = {
    color: '#ce2649',
  };

  const formik = useFormik({
    initialValues: {
      loginEmail: '',
      loginPassword: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      loginEmail: Yup.string()
        .email('Invalid email address')
        .max(320, 'Email is too long')
        .required('Please enter email'),
      loginPassword: Yup.string()
        .max(128, 'Password is too long')
        .required('Please enter password'),
    }),
  });

  return (
    <Container style={{ maxWidth: '50vh', padding: '3rem' }}>
      <Row>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>
              <strong>Email address</strong>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.loginEmail}
            />
            {formik.touched.loginEmail && formik.errors.loginEmail ? (
              <p style={errorStyle}>{formik.errors.loginEmail}</p>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.loginPassword}
            />
            {formik.touched.loginPassword && formik.errors.loginPassword ? (
              <p style={errorStyle}>{formik.errors.loginPassword}</p>
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
