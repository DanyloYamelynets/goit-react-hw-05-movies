import React from 'react';

const MovieItem = movie => {
  const {
    poster_path,
    title,
    release_date,
    genres,
    vote_average,
    overview,
    } = movie;
    
  return (
    <div>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          width="250"
        />
      )}
      <h1>
        {title}, {release_date}
      </h1>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
    </div>
  );
};
export default MovieItem;