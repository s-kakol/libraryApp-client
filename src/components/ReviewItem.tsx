import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Review from '../utilities/types/review.type';
import { BiUserCircle } from 'react-icons/bi';
import DisplayRating from './DisplayRating';

type ReviewItemProps = {
  review: Review;
};

const ReviewsList = ({ review }: ReviewItemProps): JSX.Element => {
  return (
    <Container style={{ margin: '1rem', fontSize: 24 }}>
      <Row>
        <Col>
          <BiUserCircle size={30} />
          <span style={{ color: '#2f2f2f', fontStyle: 'italic' }}>
            {` ${review.authorName}`} -
          </span>
          {` ${review.content}`}
        </Col>
        <Col>
          <DisplayRating rating={review.rating} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewsList;
