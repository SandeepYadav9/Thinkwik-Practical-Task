import React from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => {
          return (
            <li key={number} className="pagination-list">
              <button               
                className="page-item"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
