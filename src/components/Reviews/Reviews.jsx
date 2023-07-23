import { requestMovieReviews } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  NoReviews,
  ReviewContent,
  ReviewList,
} from './ReviewStyled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const movieReviews = await requestMovieReviews(id);
        setMovieReviews(movieReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <Container>
      {movieReviews && movieReviews.results.length > 0 ? (
        <ReviewList>
          {movieReviews.results.map(({ author, id, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <ReviewContent>{content}</ReviewContent>
            </li>
          ))}
        </ReviewList>
      ) : (
        <NoReviews>We don't have any reviews for this movie yet.</NoReviews>
      )}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </Container>
  );
};
export default Reviews;
