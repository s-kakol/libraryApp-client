import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CardGroup from 'react-bootstrap/CardGroup';
import BookCard from './BookCard';
import Book from '../../utilities/types/book.type';
import { createSubArray } from '../../utilities/bookSubArray';

type BookCarouselProps = {
  books: Book[];
};

const BookCarousel = ({ books }: BookCarouselProps): JSX.Element => {
  const bookGroups = createSubArray(books, 3);

  return (
    <Carousel variant="dark" controls={false}>
      {bookGroups.map((booksSubGroup, i) => (
        <CarouselItem key={i}>
          <CardGroup>
            {booksSubGroup.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </CardGroup>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default BookCarousel;
