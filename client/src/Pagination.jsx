import React from "react";

function Pagination({ breedPerPage, totalBreeds, paginate }) {
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(totalBreeds / breedPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        {pageNumber.map((item) => {
          return (
            <li
              style={{
                color: "black",
                margin: "auto",
              }}
              key={item}
            >
              <a
                href='#'
                style={{ color: "green", textDecoration: "none" }}
                onClick={() => paginate(item)}
              >
                {item === 0 ? '' : item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;
