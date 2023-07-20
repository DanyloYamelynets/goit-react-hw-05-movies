// import { requestTrendingMovies } from "Api/Api";
import Cast from 'pages/Cast/Cast';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import Reviews from 'pages/Reviews/Reviews';
// import Loader from './Loader/Loader';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/movies">Movies </Link>
        <Link to="/movies/:movieId">MovieDetails </Link>
        <Link to="/movies/:movieId/cast">Cast </Link>
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </main>
    </div>
  );
};
