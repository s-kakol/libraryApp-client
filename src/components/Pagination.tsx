import ReactPaginate from 'react-paginate';

type PaginationProps = {
  handler: (event: { selected: number }) => void;
  pageCount: number;
};

const Pagination = ({ handler, pageCount }: PaginationProps): JSX.Element => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      previousLabel="Previous"
      onPageChange={handler}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      renderOnZeroPageCount={void null}
    />
  );
};

export default Pagination;
