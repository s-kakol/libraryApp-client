import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => {
  const baseUrl = 'https://github.com/s-kakol/libraryApp';
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };
  const footerStyle = {
    backgroundColor: '#2E2E2E',
    color: '#CCCCCC',
    fontSize: 18,
    marginTop: 'auto',
  };

  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col style={{ margin: '1.5rem' }}>
            <a href={`${baseUrl}-client`} style={linkStyle}>
              <p>Client Source Code</p>
            </a>
            <a href={`${baseUrl}-server`} style={linkStyle}>
              <p>Server Source Code</p>
            </a>
            <p>Privacy Policy</p>
            <Link to={'/contact'} style={linkStyle}>
              <p>Contact Information</p>
            </Link>
          </Col>
          <Col style={{ margin: '1.5rem' }}>
            <p style={{ fontSize: 24 }}>Library Address:</p>
            <div>New City, 12-123</div>
            <div>Bookie St. 14B</div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          margin: 'auto',
          width: '50%',
          textAlign: 'center',
          paddingBottom: 12,
        }}
      >
        @Copyright Notice 2022
      </div>
    </div>
  );
};

export default Footer;
