import { FaStar } from 'react-icons/fa';

type DisplayRatingProps = {
  rating: number;
};

const DisplayRating = ({ rating }: DisplayRatingProps): JSX.Element => {
  return (
    <div style={{ float: 'right' }}>
      {[...Array(5)].map((star, i) => {
        return (
          <FaStar
            className="star"
            size={30}
            color={i + 1 <= Number(rating) ? '#ffd500' : '#808080'}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default DisplayRating;
