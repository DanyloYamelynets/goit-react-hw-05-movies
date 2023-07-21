import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = movie => {
  const { poster_path, title, release_date, genres, vote_average, overview } =
    movie;
  const location = useLocation();
  const goBackLinkRef = useRef(location.state?.from);

  return (
    <div>
      <div>
        <Link to={goBackLinkRef.current ?? '/'}>
          <button>Go back</button>
        </Link>
      </div>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          width="250"
        />
      )}
      <h1>
        {title}, {new Date(release_date).getFullYear()}
      </h1>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
