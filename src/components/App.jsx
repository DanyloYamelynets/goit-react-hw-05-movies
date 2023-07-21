import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/movies">Movies </Link>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
