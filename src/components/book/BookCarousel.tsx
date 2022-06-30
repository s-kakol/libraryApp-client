import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CardGroup from 'react-bootstrap/CardGroup';
import BookCard from './BookCard';
import Book from '../../utilities/types/book.type';

type BookCarouselProps = {
  books: Book[];
};

const BookCarousel = ({ books }: BookCarouselProps): JSX.Element => {
  const subArraySize = 3;

  const subArray = (arr: Book[], size: number): Book[][] =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) =>
      arr.slice(size * i, size + size * i)
    );

  const bookGroups = subArray(books, subArraySize);

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
