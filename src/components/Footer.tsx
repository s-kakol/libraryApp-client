import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = (): JSX.Element => {
  const baseUrl = 'https://github.com/s-kakol/libraryApp';
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div style={{ backgroundColor: '#2E2E2E', color: '#CCCCCC', fontSize: 18 }}>
      <Container>
        <Row>
          <Col style={{ margin: '1.5rem' }}>
            <a href={`${baseUrl}-client`} style={linkStyle}>
              <p>Client Source Code</p>
            </a>
            <a href={`${baseUrl}-server`} style={linkStyle}>
              <p>Server Source Code</p>
            </a>
            <p></p>
            <p>Privacy Policy</p>
            <p>Contact Information</p>
          </Col>
          <Col style={{ margin: '1.5rem' }}>
            <p style={{ fontSize: 24 }}>Library Address:</p>
            <div>New City, 12-123</div>
            <div>Bookie St. 14B</div>
          </Col>
        </Row>
      </Container>
      <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
        @Copyright Notice 2022
      </div>
    </div>
  );
};

export default Footer;
