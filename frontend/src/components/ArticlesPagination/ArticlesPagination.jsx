function ArticlesPagination({ articlesCount, limit = 10, onPageChange, page }) {
  const totalPages = Math.ceil(articlesCount / limit);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((pageNumber) => (
          <li
            className={`page-item ${pageNumber === page ? "active" : ""}`}
            key={pageNumber}
          >
            <button
              type="button"
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ArticlesPagination;
