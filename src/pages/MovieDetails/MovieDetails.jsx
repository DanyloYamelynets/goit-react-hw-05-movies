import { requestMovieDetails } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import MovieItem from 'components/MovieItem/MovieItem';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AddInfo, BtnCont, BtnStyled, Container } from './MovieDetailsStyled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesInfo = async () => {
      setIsLoading(true);
      try {
        const info = await requestMovieDetails(id);
        setMovieInfo(info);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesInfo();
  }, [id]);

  return (
    <Container>
      {movieInfo && <MovieItem {...movieInfo} />}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Error: {error}</div>}
      <div>
        <AddInfo>Additional information</AddInfo>
        <BtnCont>
          <Link to="cast">
            <BtnStyled>Cast</BtnStyled>
          </Link>

          <Link to="reviews">
            <BtnStyled>Reviews</BtnStyled>
          </Link>
        </BtnCont>
      </div>
    </Container>
  );
};

export default MovieDetails;
