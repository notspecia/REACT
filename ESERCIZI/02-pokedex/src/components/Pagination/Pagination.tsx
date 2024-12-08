import "./Pagination.css";

type PaginationProps = {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  totPages: number;
};

const Pagination = ({
  goToPreviousPage,
  goToNextPage,
  hasPrevPage,
  hasNextPage,
  page,
  totPages,
}: PaginationProps) => {
  return (
    <div className="pagination--cont">
      <button onClick={goToPreviousPage} disabled={hasPrevPage}>
        Previous Page
      </button>
      <span>
        Current page: {page + 1} of {totPages}
      </span>
      <button onClick={goToNextPage} disabled={hasNextPage}>
        Next Page
      </button>
    </div>
  );
};
export default Pagination;
