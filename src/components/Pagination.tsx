import React from "react";

type PaginationProps = {
  currentPage: number;
  charactersPerPage: number;
  totalCharacters: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  charactersPerPage,
  totalCharacters,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
