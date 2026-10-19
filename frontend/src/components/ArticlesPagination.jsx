function ArticlesPagination({ articlesCount, limit = 10, onPageChange, page }) {
  const totalPages = Math.ceil(articlesCount / limit);

  if (totalPages <= 1) return null;

  const getPaginationItems = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const items = [];

    // Always include 1
    items.push(1);

    // Determine range around current page
    let start = Math.max(2, page - 1);
    let end = Math.min(totalPages - 1, page + 1);

    // Adjust if we are at the beginning or end
    if (page <= 3) {
      start = 2;
      end = 5;
    } else if (page >= totalPages - 2) {
      start = totalPages - 4;
      end = totalPages - 1;
    }

    // Add left ellipsis
    if (start > 2) {
      items.push('...');
    }

    // Add middle range
    for (let i = start; i <= end; i++) {
      items.push(i);
    }

    // Add right ellipsis
    if (end < totalPages - 1) {
      items.push('...');
    }

    // Always include last
    items.push(totalPages);

    return items;
  };

  const items = getPaginationItems();

  return (
    <nav>
      <ul className="pagination">
        {items.map((item, index) => {
          if (item === '...') {
            return (
              <li className="page-item" key={`ellipsis-${index}`}>
                <span className="page-link" data-testid="pagination-ellipsis">
                  …
                </span>
              </li>
            );
          }
          return (
            <li
              className={`page-item ${item === page ? "active" : ""}`}
              key={item}
            >
              <button
                type="button"
                className="page-link"
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ArticlesPagination;
