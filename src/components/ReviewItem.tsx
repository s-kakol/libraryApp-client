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
  const authorOrTitle = review.authorName || review.reviewedBookTitle;

  return (
    <Container style={{ margin: '1rem', fontSize: 24 }}>
      <Row>
        <Col xs={9}>
          <BiUserCircle size={30} />
          <span style={{ color: '#2f2f2f', fontStyle: 'italic' }}>
            <strong>{` ${authorOrTitle}`}</strong> -
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
