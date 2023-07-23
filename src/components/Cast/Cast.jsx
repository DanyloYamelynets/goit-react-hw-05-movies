import { requestMovieCredits } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './CastStyled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setIsLoading(true);
      try {
        const movieCast = await requestMovieCredits(id);
        setMovieCast(movieCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [id]);

  return (
    movieCast && (
      <CastList>
        {movieCast.cast.map(({ character, id, name, profile_path }) => (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : 'https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg'
              }
              alt={name}
              width="150"
              height="230"
            />
            <div>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </CastItem>
        ))}
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        {error && <div>Error: {error}</div>}
      </CastList>
    )
  );
};
export default Cast;
