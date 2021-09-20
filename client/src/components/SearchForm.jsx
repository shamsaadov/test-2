import React, { memo } from "react";
import SearchResult from './SearchResult'

function SearchForm({ search, setSearch, count }) {
  return (
    <div>
      <form className="my-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="form-control"
          type="text"
          placeholder="Введите заголовок"
        />
      </form>
      <SearchResult count={count} search={search} />
    </div>
  );
}

export default memo(SearchForm);