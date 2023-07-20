import React from 'react';
import { Link } from 'react-router-dom';

function MoviesList({ dataList }) {
  return (
    <div>
      {dataList.map(
        ({ id, title, poster_path, release_date, vote_average }) => (
          <Link
            key={id}
            title={title}
            image={poster_path}
            date={release_date}
            rating={vote_average}
            id={id}
          />
        )
      )}
    </div>
  );
}
export default MoviesList;
