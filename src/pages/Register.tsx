import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import './Login.scss';

const Register = (): JSX.Element => {
  return (
    <Container style={{ maxWidth: '50vh', padding: '3rem' }}>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="registerUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
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
