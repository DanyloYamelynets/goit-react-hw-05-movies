import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { LinkStyled, List, MovieItem, MovieTitle } from './MoviesListStyled';

function MoviesList({ dataList }) {
  const location = useLocation();

  return (
    <List>
      {dataList.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <LinkStyled
            key={id}
            to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
            state={{ from: location }}
          >
            {
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                width="250"
              />
            }

            <MovieTitle>
              {title.length > 17 ? `${title.substring(0, 21)}...` : title}
            </MovieTitle>
          </LinkStyled>
        </MovieItem>
      ))}
    </List>
  );
}

MoviesList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
