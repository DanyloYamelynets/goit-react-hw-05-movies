import { requestTrendingMovies } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Title,
  MovieItem,
  List,
  LinkStyled,
  MovieTitle,
} from './HomeStyled';

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
    <Container>
      <Title>Trending today</Title>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Error: {error}</div>}
      <List>
        {trendMovies.map(movie => (
          <MovieItem key={movie.id}>
            <LinkStyled to={`movies/${movie.id}`}>
              {
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  width="250"
                />
              }
              <MovieTitle>
                {movie.title.length > 17
                  ? `${movie.title.substring(0, 25)}...`
                  : movie.title}
              </MovieTitle>
            </LinkStyled>
          </MovieItem>
        ))}
      </List>
    </Container>
  );
}
