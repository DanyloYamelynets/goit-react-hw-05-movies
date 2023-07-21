import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function MoviesList({ dataList }) {
    const location = useLocation();

  return (
    <div>
      {dataList.map(({ id, title, release_date }) => (
        <Link
          key={id}
          to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
          state={{ from: location }}
        >
          <div>
            <h3>
              {title}, {new Date(release_date).getFullYear()}
            </h3>
          </div>
        </Link>
      ))}
    </div>
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
