import Reservation from '../utilities/types/reservation.type';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

type ReservationItemProps = {
  details: Reservation;
};

const ReservationItem = ({ details }: ReservationItemProps): JSX.Element => {
  const beginDate = new Date(details.createdAt).toLocaleDateString('en-GB');
  const endDate = new Date(details.deadline).toLocaleDateString('en-GB');

  return (
    <Row
      className="shadow-lg rounded"
      style={{
        padding: '1rem 2rem',
        margin: '1rem',
      }}
    >
      <Col>
        <p style={{ float: 'left', fontWeight: 600 }}>
          Reservation #{details.id} - Status {details.status.toLowerCase()}
        </p>
        <h5 style={{ float: 'right', fontStyle: 'italic' }}>
          {beginDate} - {endDate}
        </h5>
      </Col>
      <Row>
        <ListGroup>
          {details.books.map(bookId => (
            <ListGroup.Item key={bookId}>{bookId}</ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Row>
  );
};

export default ReservationItem;
