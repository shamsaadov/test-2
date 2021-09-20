import { useEffect, useRef, useState } from "react";

export function useDogs(query) {
  const [page, setPage] = useState(1);
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  const typingTimeOut = useRef(null);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  useEffect(() => setPage(1), [query]);

  useEffect(() => {
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }

    setLoading(true);

    typingTimeOut.current = setTimeout(async () => {
      try {
        const response = await fetch(`/dogs/?search=${query}&page=${page}`);
        const json = await response.json();
        setDogs(json.dogs);
        setCount(json.count);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, 500);
  }, [page, query]);

  return [loading, error, dogs, nextPage, prevPage, page, count];
}
