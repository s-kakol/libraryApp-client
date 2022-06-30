type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps): JSX.Element => {
  return <h1>Rating: {rating}</h1>;
};

export default Rating;
