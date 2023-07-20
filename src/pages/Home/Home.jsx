import { requestTrendingMovies } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { results } = await requestTrendingMovies();
        setTrendMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Error: {error}</div>}
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
