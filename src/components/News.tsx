import NewsItem from '../utilities/types/news.type';

type NewsProps = {
  details: NewsItem;
};

const News = ({ details }: NewsProps): JSX.Element => {
  const date = new Date(details.createdAt);
  const newsItemStyle = {
    padding: '1rem 2rem',
    margin: '1rem',
  };

  return (
    <div className="shadow-lg rounded" style={newsItemStyle}>
      <div>
        <h2 style={{ float: 'left' }}>{details.title}</h2>
        <h4 style={{ float: 'right', fontStyle: 'italic' }}>
          {date.toLocaleDateString('en-US')}
        </h4>
      </div>
      <p style={{ clear: 'both' }}>{details.content}</p>
    </div>
  );
};

export default News;
