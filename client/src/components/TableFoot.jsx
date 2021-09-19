import React from "react";

function TableFoot({ count, nextPage, page, prevPage }) {
  const isFirstPage = page === 1;
  const isLastPage = page === Math.ceil(count / 10);

  return (
    <tfoot>
      <tr>
        <td colSpan={4}>
          <nav>
            <ul className="pagination">
              <li className={`page-item ${isFirstPage ? "disabled" : ""}`}>
                <span className="page-link" onClick={prevPage}>
                  Previous
                </span>
              </li>

              <li className={`page-item ${isLastPage ? "disabled" : ""}`}>
                <span className="page-link" onClick={nextPage}>
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFoot;
