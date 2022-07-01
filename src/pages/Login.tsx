import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import './Login.scss';
import { useRef, useState } from 'react';

const Login = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const target = useRef(null);

  return (
    <Container style={{ maxWidth: '50vh', padding: '3rem' }}>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
