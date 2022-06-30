import NewsItem from '../utilities/types/news.type';
import News from './News';

type NewsListProps = {
  news: NewsItem[];
};

const NewsList = ({ news }: NewsListProps): JSX.Element => {
  return (
    <div>
      {news.map(newsItem => (
        <News key={newsItem.id} details={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
