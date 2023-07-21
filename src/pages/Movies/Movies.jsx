import { requestSearchMovies } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryValue = searchParams.get('query');

  useEffect(() => {
    if (!queryValue) return;

    const SearchMovies = async () => {
      setIsLoading(true);
      try {
        const results = await requestSearchMovies(queryValue);
        setMovies(results.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    SearchMovies();
  }, [queryValue]);

  const onSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.children.search.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="search" required />
          <button type="submit">Search</button>
        </form>
      </div>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Error: {error}</div>}
      {movies.length > 0 && <MoviesList dataList={movies} />}
      {movies.length === 0 && (
        <div>
          <p>No movies found</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
