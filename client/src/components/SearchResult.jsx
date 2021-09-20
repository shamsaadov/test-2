import React, {memo} from 'react'

function SearchResult({ search, count }) {
  if (!search.length) return null;

  return (
    <div className="alert alert-info">
      По запросу <strong>{search}</strong> найдено результатов: {count}
    </div>
  );
}

export default memo(SearchResult)