import { useDogs } from "../hooks/useDogs";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";
import { useState } from "react";
import SearchForm from "./SearchForm";

function App() {
  const [search, setSearch] = useState("");

  //prettier-ignore
  const [loading, error, dogs, nextPage, prevPage, page, count] = useDogs(search);

  if (error) {
    return (
      <div className="alert alert-danger">
        Ошибка при получении данных: {error.toString()}
      </div>
    );
  }

  return (
    <>
      <SearchForm search={search} setSearch={setSearch} count={count} />
      <table className="table table-striped">
        <TableHead />
        <TableBody loading={loading} dogs={dogs} page={page} />
        <TableFoot
          nextPage={nextPage}
          prevPage={prevPage}
          count={count}
          page={page}
        />
      </table>
    </>
  );
}

export default App;
