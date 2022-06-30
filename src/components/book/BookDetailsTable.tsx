import Table from 'react-bootstrap/Table';
import { Genre } from '../../utilities/types/book.type';

type BookDetailsTableProps = {
  isbn: number;
  title: string;
  author: string;
  publisher: string;
  publicationYear: number;
  genre: Genre[];
  pages: number;
};

const BookDetailsTable = ({
  isbn,
  title,
  author,
  publisher,
  publicationYear,
  genre,
  pages,
}: BookDetailsTableProps): JSX.Element => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>ISBN</td>
          <td>{isbn}</td>
        </tr>
        <tr>
          <td>Title</td>
          <td>{title}</td>
        </tr>
        <tr>
          <td>Author</td>
          <td>{author}</td>
        </tr>
        <tr>
          <td>Publisher</td>
          <td>{publisher}</td>
        </tr>
        <tr>
          <td>Publication Year</td>
          <td>{publicationYear}</td>
        </tr>
        <tr>
          <td>Genres</td>
          <td>{genre.join(' ')}</td>
        </tr>
        <tr>
          <td>Pages</td>
          <td>{pages}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BookDetailsTable;
