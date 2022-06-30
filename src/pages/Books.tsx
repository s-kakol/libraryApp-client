import { useParams } from 'react-router-dom';

const Books = (): JSX.Element => {
  const genre = useParams().genre || null;
  return <h1>Books {genre}</h1>;
};

export default Books;
