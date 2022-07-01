import ReactPaginate from 'react-paginate';
import './Pagination.scss';

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
      containerClassName="pagination"
      pageLinkClassName="page-num"
      previousLinkClassName="page-num"
      nextLinkClassName="page-num"
      activeLinkClassName="active"
    />
  );
};

export default Pagination;
