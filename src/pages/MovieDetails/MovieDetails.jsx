import { requestMovieDetails } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import MovieItem from 'components/MovieItem/MovieItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams();

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
    <div>
      {movieInfo && <MovieItem {...movieInfo} />}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default MovieDetails;