'use client';

import { ArrowRight } from 'phosphor-react';

const Pagination = ({ paginateFunction }: any) => {
  const { totalPage, currentPage, setCurrentPage, goToNextPage } =
    paginateFunction;
  return (
    <div className="row">
      <div className="col-12">
        <div className="pagination-content">
          <nav aria-label="Page navigation example">
            <ul className="pagination ">
              {Array.from({ length: totalPage }, (_, index) => (
                <li
                  className={`page-item ${index + 1 === currentPage && 'active'}`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li className="page-item">
                <button
                  onClick={() => goToNextPage()}
                  className="page-link"
                  disabled={currentPage === totalPage}
                >
                  Next Page
                  <ArrowRight size={16} weight="bold" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
