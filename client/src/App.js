import { useDogs } from "./hooks/useDogs";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";
import { useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
  const [search, setSearch] = useState("");

  const [loading, error, dogs, nextPage, prevPage, page, count] =
    useDogs(search);

  if (error) {
    return (
      <div className="alert alert-danger">
        Ошибка при получении данных: {error.toString()}
      </div>
    );
  }

  return (
    <div>
      <SearchForm search={search} setSearch={setSearch} count={count} />
      <table className="table table-striped">
        <TableHead />
        <TableBody loading={loading} dogs={dogs} page={page} />
      </table>
      <TableFoot
        nextPage={nextPage}
        prevPage={prevPage}
        count={count}
        page={page}
      />
    </div>
  );
}

export default App;
