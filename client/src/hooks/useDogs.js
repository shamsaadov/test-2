import { useEffect, useState } from "react";

export function useDogs(searchText) {
  const [page, setPage] = useState(1);
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    setPage(1);
  }, [searchText]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `/dogs/?search=${searchText}&page=${page}`
        );
        const json = await response.json();
        setDogs(json.dogs);
        setCount(json.count);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, searchText]);

  return [loading, error, dogs, nextPage, prevPage, page, count];
}
