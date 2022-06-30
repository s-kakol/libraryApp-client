import Review from '../utilities/types/review.type';
import ReviewItem from './ReviewItem';

type ReviewsListProps = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: ReviewsListProps): JSX.Element => {
  return (
    <>
      {reviews.map(review => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </>
  );
};

export default ReviewsList;
